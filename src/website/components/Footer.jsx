import i18next from "i18next"

export const Footer = () => {
  return (
    <>
      <div className="h-40 bg-latte flex justify-center items-end py-5">
        <div className="">
          <div className="text-accent">{i18next.t("footer-copyright-text")}</div>
        </div>
      </div>
    </>
  )
}
