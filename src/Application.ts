import { ApplicationProvider } from 'ApplicationProvider'

import { Environment } from 'Environment'

class Application {
  public start = () => {
    Environment.prepare()

    ApplicationProvider.prepare(Environment.getInt('PORT'))
  }
}

const application = new Application()

application.start()
