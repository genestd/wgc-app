import { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../graphql/subscriptions'
import * as teams from './mutations/teams'
import { transformEvents } from './queries/events';
import { RECEIVED_EVENT_UPDATE, RECEIVED_NEW_EVENT_TEAM } from '../../globalStore/globalActionTypes';

export const addSubscriptions = (globalDispatch) => {
    const subscriptionList = []
    // listen for changes to event details
    const eventChangeSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateEvent))
        .subscribe({
            next: response => {
                const event = transformEvents([response.value.data.onUpdateEvent])[0]
                globalDispatch({ type: RECEIVED_EVENT_UPDATE, event })
            }
        })
    subscriptionList.push(eventChangeSubscription)
    // listen for changes to logged in User's teams
    const userTeamSubscription = API.graphql(graphqlOperation(teams.onCreateWGCEventTeam))
        .subscribe({
            next: response => {
                const team = response.value.data.onCreateEventTeam
                console.log(team)
                globalDispatch({ type: RECEIVED_NEW_EVENT_TEAM, data: team })
            }
        })
    subscriptionList.push(userTeamSubscription)
    return subscriptionList
}
