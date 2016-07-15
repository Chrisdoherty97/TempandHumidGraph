 </head>
  <body>
    <div id="chart"></div>
    <h1 align="center">Temperature Readings</h1>
    <script>
      eon.chart({
  history: true,
  channel: 'Temperature',
  flow: true,
  generate: {
    bindto: '#chart',
    data: {
      x: 'x',
      labels: false
    },
    axis : {
      x : {
        type : 'timeseries',
        tick: {
          format: '%H:%M:%S'
        }
      }
    }
  }
});
    </script>
