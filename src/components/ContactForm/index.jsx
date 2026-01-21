import React from "react"
import { Link, navigate } from "gatsby"
import { useForm } from "react-hook-form"
import { useState } from "react"
import json from "/src/siteData.json"
import Alert from "@mui/material/Alert"

const jobs = json.header.jobs

const Component = ({ location, pageContext }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
  })

  const [isThanks, setIsThanks] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("success")

  const step1 = !isThanks && !isConfirm
  const step2 = !isThanks && isConfirm

  const onSubmit = async data => {
    if (step1) {
      setFormValues(data)
      setIsConfirm(true)
      return
    }

    const formData = {
      inquiryType: `応募: ${data.name} ${data.hope}`,
      text: [
        { question: "お名前", answer: data.name },
        { question: "年齢", answer: data.age },
        { question: "性別", answer: data.gender },
        { question: "メールアドレス", answer: data.email },
        { question: "お電話番号", answer: data.tel },
        { question: "現職", answer: data.job },
        { question: "住所", answer: `${data.zip} ${data.address}` },
        { question: "希望職種", answer: data.hope },
      ],
      inquiryDetails: data.contact,
    }

    try {
      const response = await fetch(pageContext.endpoint + "contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      } else {
        // if (window.gtag) {
        //   window.gtag("event", "contact_form_submitted", {
        //     event_category: "Contact Form",
        //     event_label: "Submit",
        //     value: 1,
        //   })
        // }
        setIsConfirm(false)
        setIsThanks(true)
        navigate("/contact/thanks")
      }
    } catch (error) {
      console.log(error)
      setAlertMessage("送信に失敗しました。")
      setAlertType("error")
      window.scrollTo({ top: 400, behavior: "smooth" })
    }
  }

  return (
    <div className="contactPage">
      {jobs && jobs.length && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(errors).length > 0 && (
            <p className="errTop">
              入力内容に誤りがあります。恐れ入りますが下記の入力項目をもう一度ご確認ください。
            </p>
          )}

          {step1 && (
            <p className="topTxt fadeInUp on">
              下記項目に情報をご入力の上、ご応募ください。
            </p>
          )}

          {step2 && (
            <p className="topTxt fadeInUp on">
              入力内容をご確認の上、
              <br className="sp" />
              「送信する」を押してください。
            </p>
          )}

          {alertMessage && (
            <Alert
              severity={alertType}
              style={{ marginBottom: "50px", fontSize: "15px" }}
            >
              {alertMessage}
            </Alert>
          )}

          {step1 && (
            <>
              <table className="fadeInUp on">
                <tbody>
                  <tr className={errors.name ? "error" : ""}>
                    <th>
                      お名前<span className="must">必須</span>
                    </th>
                    <td>
                      <input
                        type="text"
                        size="40"
                        placeholder="山田太郎"
                        {...register("name", {
                          required: true,
                          minLength: 1,
                        })}
                      />
                    </td>
                  </tr>
                  <tr className={errors.age ? "error" : ""}>
                    <th>
                      年齢<span className="must">必須</span>
                    </th>
                    <td>
                      <input
                        type="number"
                        {...register("age", {
                          required: true,
                          min: 1,
                        })}
                      />
                    </td>
                  </tr>
                  <tr className={errors.gender ? "error" : ""}>
                    <th>
                      性別<span className="must">必須</span>
                    </th>
                    <td>
                      <select
                        {...register("gender", {
                          required: true,
                        })}
                      >
                        <option value="">---</option>
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                        <option value="その他">その他</option>
                      </select>
                    </td>
                  </tr>
                  <tr className={errors.email ? "error" : ""}>
                    <th>
                      メールアドレス<span className="must">必須</span>
                    </th>
                    <td>
                      <input
                        type="email"
                        size="40"
                        placeholder="例 ) info@example.jp"
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                      />
                    </td>
                  </tr>
                  <tr className={errors.tel ? "error" : ""}>
                    <th>
                      お電話番号<span className="must">必須</span>
                    </th>
                    <td>
                      <input
                        type="tel"
                        size="40"
                        maxlength="13"
                        minlength="10"
                        placeholder="例 ) 0300000000"
                        {...register("tel", {
                          required: true,
                          pattern: {
                            value: /^[0-9]{10,13}$/,
                          },
                        })}
                      />
                    </td>
                  </tr>
                  <tr className={errors.job ? "error" : ""}>
                    <th>
                      現職<span className="must">必須</span>
                    </th>
                    <td>
                      <select
                        {...register("job", {
                          required: true,
                        })}
                      >
                        <option value="">---</option>
                        <option value="在職">在職</option>
                        <option value="離職">離職</option>
                        <option value="離職手続き中">離職手続き中</option>
                      </select>
                    </td>
                  </tr>
                  <tr className={errors.zip || errors.address ? "error" : ""}>
                    <th>
                      住所<span className="must">必須</span>
                    </th>
                    <td>
                      <p className="add">
                        <span className="ico">〒</span>
                        <span
                          className="fzip"
                          style={{
                            display: "inline-block",
                          }}
                        >
                          <input
                            type="text"
                            size="40"
                            placeholder="100-000"
                            {...register("zip", {
                              required: true,
                              pattern: {
                                value: /^[0-9]{3}-?[0-9]{4}$/,
                              },
                            })}
                          />
                        </span>
                      </p>
                      <p>
                        <input
                          type="text"
                          size="40"
                          placeholder="例 ) 東京都●●区●●丁目●番●号"
                          {...register("address", {
                            required: true,
                          })}
                        />
                      </p>
                    </td>
                  </tr>
                  <tr className={errors.hope ? "error" : ""}>
                    <th>
                      希望職種<span className="must">必須</span>
                    </th>
                    <td>
                      <select
                        {...register("hope", {
                          required: true,
                        })}
                      >
                        <option value="">---</option>
                        {jobs.map((job, index) => (
                          <option key={index} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr className={errors.contact ? "error" : ""}>
                    <th>
                      お問い合わせ内容<span className="optional">任意</span>
                    </th>
                    <td>
                      <textarea
                        cols="40"
                        rows="10"
                        placeholder="お問い合わせ内容をご自由にご記入ください"
                        {...register("contact")}
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="txtP fadeInUp">
                当社
                <Link to="/privacy" target="_blank">
                  プライバシーポリシー
                </Link>
                にご同意頂ける
                <br className="sp" />
                場合は、「個人情報の取り扱いに同意する」に
                <br />
                チェックをお願いいたします。
              </p>
              <p className="agreeTxt fadeInUp">
                <span className="wpcf7-list-item">
                  <label>
                    <input
                      type="checkbox"
                      {...register("agree", {
                        required: true,
                      })}
                    />
                    <span className="wpcf7-list-item-label">
                      当社の個人情報保護方針に同意する。
                    </span>
                  </label>
                </span>
              </p>

              <ul className="submit fadeInUp">
                <li className={!isValid ? "disabled" : ""}>
                  <span className="info01">
                    <span className="info02">
                      <input
                        type="submit"
                        value="内容を確認する"
                        disabled={!isValid}
                      />
                    </span>
                  </span>
                </li>
              </ul>
            </>
          )}

          {step2 && (
            <>
              <table className="confirmTab fadeInUp on">
                <tbody>
                  <tr>
                    <th>
                      お名前<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="fname">{formValues.name}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      年齢<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="fage">{formValues.age}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      性別<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="fsex">{formValues.gender}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      メールアドレス<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="femail">{formValues.email}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      お電話番号<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="ftel">{formValues.tel}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      現職<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="fjob">{formValues.job}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      住所<span className="must">必須</span>
                    </th>
                    <td>
                      <p className="add">
                        <span className="ico">〒</span>
                        <span className="fzip">{formValues.zip}</span>
                      </p>
                      <p>
                        <span className="faddress">{formValues.address}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      希望職種<span className="must">必須</span>
                    </th>
                    <td>
                      <span className="fhope">{formValues.hope}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      お問い合わせ内容<span className="optional">任意</span>
                    </th>
                    <td>
                      <span className="fcontact">{formValues.contact}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <ul className="submit fadeInUp on">
                <li className="back">
                  <span className="info01">
                    <span className="info02">
                      <input
                        type="button"
                        value="内容を修正する"
                        onClick={() => setIsConfirm(false)}
                      />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="info01">
                    <span className="info02">
                      <input type="submit" value="送信する" />
                    </span>
                  </span>
                </li>
              </ul>
            </>
          )}
        </form>
      )}
    </div>
  )
}

export default Component
