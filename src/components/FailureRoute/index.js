import './index.css'

const FailureRoute = () => (
  <div className="failure-page">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
      className="img-element"
    />
    <h1 className="heading">Oops! Something Went Wrong</h1>
    <p className="description">
      We cannot seem to find the page you are looking for
    </p>
    <button className="retry-btn" type="button">
      Retry
    </button>
  </div>
)

export default FailureRoute
