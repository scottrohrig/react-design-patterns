import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from '../info/UserInfo';

export function CurrentUserContainer(){

    return (
        <>
        <div>
        <h2>Container Design Pattern</h2>
        <p>
            Below we can see an example of a container data loader. The function of the container is to handle loading the data for its children. 
            </p>
        </div>
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
        </>
    )
}