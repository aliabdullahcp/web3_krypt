// https://eth-goerli.g.alchemy.com/v2/9rPN2s2U8B89YIJDtqHURusfc0YLDRGb

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9rPN2s2U8B89YIJDtqHURusfc0YLDRGb',
      accounts: ['128444617f557a92f8c2f7164fa4ae5df72e4de89b6a1c6d69c27c971428ce97']
    }
  }
}