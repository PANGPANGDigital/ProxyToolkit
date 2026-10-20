// Converted from ddgksf2013/Rewrite/AdBlock/XiaoYuZhouAds.conf
// https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/XiaoYuZhouAds.conf

var blockedEndpoint = /^https?:\/\/api\.xiaoyuzhoufm\.com\/v\d\/(?:search\/get-express|search\/get-preset|category\/list-daily-suggestion|flash-screen\/list)/;

if ($request && blockedEndpoint.test($request.url)) {
  // Match the source rules' reject-200 behavior without contacting the API.
  $done({
    response: {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: ""
    }
  });
} else if ($response && $request && /\/v\d\/discovery-feed\/list/.test($request.url)) {
  try {
    var payload = JSON.parse($response.body || "");
    if (payload && Array.isArray(payload.data)) {
      var original = payload.data;
      payload.data = original.filter(function (item) {
        return item == null || item.type !== "DISCOVERY_BANNER";
      });
      if (payload.data.length !== original.length) {
        $done({ body: JSON.stringify(payload) });
      } else {
        $done({});
      }
    } else {
      $done({});
    }
  } catch (error) {
    $done({});
  }
} else {
  $done({});
}
