// Values from the LSA team's Web Embed snippet. None are secret: the browser receives them either way.
const pegaServerUrl = 'https://areteans09.pegalabs.io/prweb/'

export const pegaEmbedConfig = {
  scriptUrl: `${pegaServerUrl}PRRestService/c11nsvc/v1/pega-embed.js`,
  attributes: {
    id: 'theEmbed',
    action: 'createCase',
    caseTypeID: 'HbrSpr-RtmtMgr-Work-RetirementIncomeApplication',
    themeID: 'pzCosmosDefault',
    casePage: 'assignment',
    appAlias: 'retirement-mgr',
    pegaServerUrl,
    autoReauth: 'true',
    authService: 'pega',
    clientId: '76814314482090868118',
  },
}
