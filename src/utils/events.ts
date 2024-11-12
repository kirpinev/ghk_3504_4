declare global {
  interface Window {
    dataLayer: unknown[];
      gtag: (
          e: "event",
          action: string,
          variant_name: Record<string, string>,
      ) => void;
  }
}

type Payload = {
    partner: string;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbwRRKMStwih7VzN5s-rAGF12udquv0QYV7heiAo7WDvMjdN7WvHc-oCYanH8XsyFar_/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, ...payload, variant: "ghk_3504_4" }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};