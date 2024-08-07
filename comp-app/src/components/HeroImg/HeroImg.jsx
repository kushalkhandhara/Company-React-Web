import "./HeroImg.css";

export default function HeroImg(props) {
  return (
    <>
        <div className="heroImg">
          <div className="caption">
            <h2>{props.header}</h2>
            <h6>{props.data}</h6>

          </div>
        </div>
    </>
  )
}
