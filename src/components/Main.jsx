import { SplitScreenChildren } from './SplitScreenChildren'

export function Main() {
    return (
        <div>
            <SplitScreenChildren style={{
                border: '1px solid',
                borderRadius: '3px',
                height: 'calc(100vh)',
                padding: '4px',
            }}>
                <div >Left</div>
                <div >Right</div>
            </SplitScreenChildren>
        </div>
    )
}