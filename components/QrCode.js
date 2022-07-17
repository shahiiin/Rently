





function QrCode() {
  const iframeCss = {
    marginBottom: "110px",
    top: "-91px",
    position: "relative",
    height: "433px !important",
    width: "380px",
  };

  const parentIframeCssCss = {
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="" style={parentIframeCssCss}>
      <iframe src='https://dev.rently.sg/' style={iframeCss} scrolling="no" />
    </div>

  )
}

export default QrCode