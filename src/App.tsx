import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import FunctionCurryingInEventHandlers from './React-Tips/0-Function-Currying-In-Event-Handlers'
import HookForHandlingArrays from './React-Tips/1-Hook-For-Handling-Arrays'
import DerivingStateInReact from './React-Tips/2-Deriving-State-In-React'
import BadUseEffectUsage from './React-Tips/3-Bad-UseEffect-Usage'
import UsingEnums from './React-Tips/4-Using-Enums'
import LoadingIndicator from './React-Tips/5-Loading-Indicator'
import HandlingMultipleStateUpdates from './React-Tips/6-Handling-Multiple-State-Updates'
import UsingUseTransitionToInteruptPending from './React-Tips/7-Using-UseTransition-To-Interupt-Pending'
import DisableSubmitBeforeTaskFinish from './React-Tips/8-Disable-Submit-Before-Task-Finish'

function App() {

  const tipsList = [
    {
      title: 'Function Currying In Event Handlers',
      element: <FunctionCurryingInEventHandlers />,
    },
    {
      title: 'Hook For Handling Arrays',
      element: <HookForHandlingArrays />,
    },
    {
      title: 'Deriving State In React',
      element: <DerivingStateInReact />,
    },
    {
      title: 'Bad useEffect Usage',
      element: <BadUseEffectUsage />,
    },
    {
      title: 'Using Enums',
      element: <UsingEnums />,
    },
    {
      title: 'Loading Indicator',
      element: <LoadingIndicator />,
    },
    {
      title: 'Handling Multiple State Updates',
      element: <HandlingMultipleStateUpdates />,
    },
    {
      title: 'Using useTransition To Interupt Pending',
      element: <UsingUseTransitionToInteruptPending />,
    },
    {
      title: 'Disable Submit Before Task Finish',
      element: <DisableSubmitBeforeTaskFinish />,
    },
  ]

  const home = (
    <>
      <h1>React Tips</h1>
      <ul className='main'>
        {tipsList.map((tip, index) => (
          <li key={index}>
            <a href={`/${index}`}>{tip.title}</a>
          </li>
        ))}
      </ul>
    </>
  )


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={home} />
          {tipsList.map((tip, index) => (
            <Route key={index} path={`/${index}`} element={tip.element} />
          ))}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
