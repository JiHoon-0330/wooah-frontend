const replaceBody = (body: string, oldBody: string, newBody: string) =>
  body.replace(new RegExp(oldBody, "g"), newBody);

const getFormattedTwitterBody = (
  body: string,
  hashtags: string[],
  urls: {
    display_url: string;
    expanded_url: string;
    url: string;
  }[],
  mediaUrl: string,
) => {
  let formattedBody = replaceBody(body, "\\\\n", "<br/>");
  formattedBody = replaceBody(formattedBody, mediaUrl ?? "", "");
  formattedBody = replaceBody(formattedBody, mediaUrl ?? "", "");
  formattedBody = urls.reduce(
    (formattedBody, url) =>
      replaceBody(
        formattedBody,
        url?.url ?? "",
        url?.display_url
          ? `<a class=twitter__url href=${url?.expanded_url} target="_blank">${url?.display_url}</a>`
          : "",
      ),
    formattedBody,
  );

  formattedBody = hashtags.reduce(
    (formattedBody, hashtag, index) =>
      replaceBody(formattedBody, `#${hashtag}`, `#${index}#`),
    formattedBody,
  );

  return hashtags.reduce(
    (formattedBody, hashtag, index) =>
      replaceBody(
        formattedBody,
        `#${index}#`,
        `<a class=twitter__hashtag href="https://twitter.com/hashtag/${hashtag}?src=hashtag_click" target="_blank">#${hashtag}</a>`,
      ),
    formattedBody,
  );
};

export default getFormattedTwitterBody;
