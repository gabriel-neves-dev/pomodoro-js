import React from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/sToT';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;

}


export function PomodoroTimer(props: Props): JSX.Element {

    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1)
    }, 1000);

    return (
        <div className="pomodoro">
            <h2>Você está: Trabalhando</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text={'teste'} onClick={() => {console.log(123)}} />
                <Button text={'teste'} onClick={() => {console.log(123)}} />
                <Button text={'teste'} onClick={() => {console.log(123)}} />
            </div>

            <div className="details">
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
            </div>
        </div>
    )
}