import locations from './data'
import './App.css'

function HeaderComponent() {
  return (
    <div className='header'>
      <h2>My Travel Journal</h2>
    </div>
  )
}

function EntriesComponent(props) {
  return (
    <div className='entry'>
      <img src={props.imageUrl} />
      <div className='text'>
        <h5>{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></h5>
        <h2>{props.title}</h2>
        <h5>{props.startDate} - {props.endDate}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='journal'>
      <HeaderComponent />
      {locations.map(function(location) {
        return (
          <>
          <EntriesComponent title={location.title}
          location={location.location}
          googleMapsUrl={location.googleMapsUrl}
          startDate={location.startDate}
          endDate={location.endDate}
          description={location.description}
          imageUrl={location.imageUrl} />
          <hr />
          </>
        )
      })

      }
    </div>
  )
}

export default App
