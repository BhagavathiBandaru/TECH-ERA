import NavbarRoute from '../NavbarRoute'

import './index.css'

const NotFoundRoute = () => (
  <>
    <NavbarRoute />
    <div className="not-found-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        className="image-ele"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="sorry-description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFoundRoute
