import Mock from 'mockjs'
Mock.setup({timeout:'200-500'});
var Random = Mock.Random;
Mock.mock('/getSoftData',{
    "array|50-110": [
        {
          "name":Random.title(),
          "uploadTime":Random.datetime('yyyy-MM-dd'),
          "size":Random.float(60, 100, 3, 5),
          "downloadTimes":Random.integer(60, 200),
          "abstract":Random.sentence(),
          "downloadLink":Random.url(),
          "version":'1-1-1',
        },
        {
            "name":Random.title(),
            "uploadTime":Random.datetime('yyyy-MM-dd'),
            "size":Random.float(60, 100, 3, 5),
            "downloadTimes":Random.integer(60, 200),
            "abstract":Random.sentence(),
            "downloadLink":Random.url(),
            "version":'1-1-1',
          }
      ]
})