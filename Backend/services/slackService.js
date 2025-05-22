import axios from "axios";

export const sendToSlack = async (text) => {
  await axios.post(process.env.SLACK_WEBHOOK_URL, { text });
};
