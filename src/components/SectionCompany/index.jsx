import React from "react"
import Map from "/src/components/Map"

const Component = ({ companyProfile, id }) => {

  const items = [...companyProfile.items];
  const addressIndex = items.findIndex(item => item.title === "住所");

  if (addressIndex > -1) {
    const [addressItem] = items.splice(addressIndex, 1); // 住所の行を取り出す
    items.splice(1, 0, addressItem); // 2番目に挿入
  }

  return (

    // 会社概要
    <section className="comCompany" id={id}>
      <div className="content">
        <h2 className="headLine04 fadeInUp">Company</h2>

        <div className="mapInner clearfix">
          <div className="textBox">
            <div className="tabBox fadeInUp">
              <table>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <th>{item.title}</th>
                      <td dangerouslySetInnerHTML={{ __html: item.content }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Google map */}
          <div className="mapBox fadeInUp">
            <Map />
          </div>
        </div>

      </div>
    </section>

  )
}

export default Component
