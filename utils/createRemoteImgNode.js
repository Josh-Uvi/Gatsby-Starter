import { createRemoteFileNode } from "gatsby-source-filesystem"

const onCreateNode = async({ node, actions, store, cache }) => {
  
  // if the node is not DogImage, we don't wanna do anything
  if (node.internal.type !== "dataJson") {
    return
  }
  const { createNode } = actions
  // download image and create a File node
  // with gatsby-transformer-sharp and gatsby-plugin-sharp
  // that node will become an ImageSharp
  const {urlToImage} = node.articles
  const fileNode = await createRemoteFileNode({
    url: urlToImage,
    store,
    cache,
    createNode,
    createNodeId: id => `news-image-sharp-${id}`,
  })
  
  if (fileNode) {
    // link File node to DogImage node
    // at field image
    node.image___NODE = fileNode.id
  }}
}

export default onCreateNode