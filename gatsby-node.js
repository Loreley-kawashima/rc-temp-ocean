const path = require(`path`)
const json = require(`${__dirname}/src/siteData.json`)

const templateComponent = type => {
  switch (type) {
    // TOP
    case 101:
      return path.resolve(`${__dirname}/src/templates/101_top/index.jsx`)
    // 各募集ページ
    case 102:
      return path.resolve(`${__dirname}/src/templates/102_recruit/index.jsx`)
    // 記事一覧
    case 103:
      return path.resolve(`${__dirname}/src/templates/103_articles/index.jsx`)
    // プラポ
    case 104:
      return path.resolve(`${__dirname}/src/templates/104_privacy/index.jsx`)
    //問い合わせ
    case 105:
      return path.resolve(`${__dirname}/src/templates/105_contact/index.jsx`)
    //募集一覧
    case 106:
      return path.resolve(`${__dirname}/src/templates/106_recruits/index.jsx`)
  }
}

const chunkArray = (array, chunkSize) => {
  const result = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const pageConstruct = json.pageConstruct
const articles = json.articles.content
const chunkedArticles = chunkArray(articles, 9)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  pageConstruct.forEach(props => {

    const commonContext = {
      ...props.context,
      pageConstruct, // ここで全ページ情報を渡す
    }

    if (props.type !== 103) {
      createPage({
        path: props.slug,
        component: templateComponent(props.type),
        context: commonContext,
      })
    } else {
      const linkPrefix = `/${props.slug}/p/`
      //個別記事ページ生成
      articles.forEach(article => {
        createPage({
          path: `${props.slug}/${article.slug}`,
          component: path.resolve(
            `${__dirname}/src/templates/100_article/index.jsx`
          ),
          context: {
            ...article,
            linkPrefix,
            pageConstruct,
          },
        })
      })

      //記事一覧ページ生成
      chunkedArticles.forEach((articles, index) => {
        createPage({
          path: `${linkPrefix}${index + 1}`,
          component: templateComponent(props.type),
          context: {
            ...props.context,
            articles,
            currentPage: index + 1,
            totalPages: chunkedArticles.length,
            linkPrefix,
            slug: props.slug,
            pageConstruct,
          },
        })
      })
    }
  })
}
