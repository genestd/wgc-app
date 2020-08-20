import { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../graphql/subscriptions'

export const addSubscriptions = () => {
    const subscriptionList = []
    const eventChangeSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateEvent))
        .subscribe({
            next: data => console.log('event sub', data)
        })
    subscriptionList.push(eventChangeSubscription)

    return subscriptionList
}
