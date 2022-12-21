const axios = require("axios").default;

exports.sendFlexCovidInfo = async () => {
  const response = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all",
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log(response.data);

  let msg = {
    type: "flex",
    altText: "รายงานสถานการณโควิด ประจำวัน",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://www.rcrt.or.th/wp-content/uploads/2020/03/COVID-19.jpg",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: "https://ddc.moph.go.th/covid19-dashboard/?dashboard=main",
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "วันที่" + response.data[0].update_date,
            weight: "bold",
            size: "xl",
            color: "#1BFF00",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "ผู้ป่วยรายใหม่",
                    color: "#FF0000",
                    size: "sm",
                    flex: 5,
                  },
                  {
                    type: "text",
                    text: response.data[0].new_case + "ราย",
                    wrap: true,
                    color: "#FF0000",
                    size: "sm",
                    flex: 5,
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "ผู้เสียชีวิต",
                    color: "#000000",
                    size: "sm",
                    flex: 5,
                  },
                  {
                    type: "text",
                    text: response.data[0].new_death + "ราย",
                    wrap: true,
                    color: "#000000",
                    size: "sm",
                    flex: 5,
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "button",
            style: "link",
            height: "sm",
            action: {
              type: "uri",
              label: "More",
              uri: "https://ddc.moph.go.th/covid19-dashboard/?dashboard=main",
            },
            color: "#000000",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [],
            margin: "sm",
          },
        ],
        flex: 0,
        backgroundColor: "#04FF00",
      },
    },
  };

  return msg;
};
