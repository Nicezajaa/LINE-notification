const Alertbox = (name, uid, building) => {
    const Alertbox = 
    {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "horizontal",
          "flex": 1,
          "backgroundColor": "#F2D8A7",
          "borderColor": "#FBFBFBFF",
          "contents": [
            {
              "type": "text",
              "text": "AccessAlert",
              "weight": "bold",
              "size": "xl",
              "color": "#143340",
              "gravity": "center"
            },
            {
              "type": "image",
              "url": "https://img5.pic.in.th/file/secure-sv1/pngegg-1c7cbd943edb0edff.png",
              "flex": 1,
              "align": "end",
              "size": "xxs",
              "action": {
                "type": "uri",
                "label": "Google sheet ",
                "uri": "https://docs.google.com/spreadsheets/d/1KWFG72zq79i33In59rf7ZeQC9bcQ1Q49xHkNYF9bhEk/edit#gid=1693959538"
              }
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "backgroundColor": "#143340",
          "borderColor": "#F5F3F3FF",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "NAME ",
                      "weight": "bold",
                      "size": "lg",
                      "color": "#6CE0B7",
                      "align": "center",
                      "offsetBottom": "4px"
                    },
                    {
                      "type": "text",
                      "text": ">",
                      "weight": "bold",
                      "size": "lg",
                      "color": "#F23D4C",
                      "align": "center",
                      "offsetBottom": "4px"
                    },
                    {
                      "type": "text",
                      "text": name,
                      "weight": "bold",
                      "size": "lg",
                      "color": "#D6FF82",
                      "align": "center",
                      "offsetBottom": "4px"
                    }
                  ]
                },
                {
                  "type": "separator"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "height": "30px",
                  "contents": [
                    {
                      "type": "text",
                      "text": "UID",
                      "weight": "bold",
                      "size": "lg",
                      "color": "#6CE0B7",
                      "align": "center",
                      "offsetTop": "7px"
                    },
                    {
                      "type": "text",
                      "text": ">",
                      "weight": "bold",
                      "size": "lg",
                      "color": "#F23D4C",
                      "align": "center",
                      "offsetTop": "7px"
                    },
                    {
                      "type": "text",
                      "text": uid,
                      "weight": "bold",
                      "size": "md",
                      "color": "#D6FF82",
                      "align": "center",
                      "offsetTop": "9px"
                    }
                  ]
                },
                {
                  "type": "separator",
                  "margin": "md"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "height": "30px",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Building",
                      "weight": "bold",
                      "size": "lg",
                      "color": "#6CE0B7",
                      "align": "center",
                      "offsetTop": "5px"
                    },
                    {
                      "type": "text",
                      "text": ">",
                      "weight": "bold",
                      "size": "lg",
                      "color": "#F23D4C",
                      "align": "center",
                      "offsetTop": "5px"
                    },
                    {
                      "type": "text",
                      "text": building,
                      "weight": "bold",
                      "size": "lg",
                      "color": "#D6FF82",
                      "align": "center",
                      "offsetTop": "5px"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "height": "38px",
          "backgroundColor": "#D94032",
          "contents": [
            {
              "type": "text",
              "text": "Nueng building - Tanyaburi",
              "size": "xs",
              "color": "#FFFFFFFF",
              "align": "center"
            }
          ]
        }
      }
     return Alertbox
}
module.exports = Alertbox;