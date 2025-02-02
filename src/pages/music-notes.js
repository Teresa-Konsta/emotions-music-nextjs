'use client'
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { pulseActions } from '@/store/pulse-slice';
import { useRouter } from 'next/router';
import { colorNotePair } from '@/globalVariables';
import Instruction from '../components/guide/Instruction';
import styles from '../components/layout/PulseInput.module.css';
import classes from '../styles/Guide.module.css';

//I use 2 functions instead of 1 for separate color and note calculation for better UX output
function specifyMusicNote(pulseResult) {    
    if(pulseResult == 0 || pulseResult == 1) return colorNotePair.grey;
    else if(pulseResult < 1) return colorNotePair.black;
    else if(pulseResult < 3 && pulseResult > 2) return colorNotePair.brown;
    else if(pulseResult <= 2 && pulseResult > 1) return colorNotePair.blue;
    else if(pulseResult < 7 && pulseResult >= 5) return colorNotePair.green;
    else if(pulseResult < 10 && pulseResult >= 7) return colorNotePair.yellow;
    else if(pulseResult < 5 && pulseResult >= 3) return colorNotePair.violet;
    else return colorNotePair.orange;
}

function setAudioSrc (mnote) {
    if(mnote == colorNotePair.grey) return "audio/g3grey.mp3";
    else if(mnote == colorNotePair.black) return "audio/d3black.mp3";
    else if(mnote == colorNotePair.brown) return "audio/b3brown.mp3";
    else if(mnote == colorNotePair.blue) return "audio/f3blue.mp3";
    else if(mnote == colorNotePair.green) return "audio/g5green.mp3";
    else if(mnote == colorNotePair.yellow) return "audio/f-5yellow.mp3";
    else if(mnote == colorNotePair.violet) return "audio/e5violet.mp3";
    else return "audio/b5orange.mp3";
}

export default function MusicNotesPage() {
    const bigScreen = useMediaQuery({ query: '(min-width: 990px)' });

    const pulse1 = useSelector(state => state.pulse.pulseInput1);
    const pulse2 = useSelector(state => state.pulse.pulseInput2);
    const pulse3 = useSelector(state => state.pulse.pulseInput3);
    const dispatch = useDispatch();
    const router = useRouter();

    let pulseResult1 = (pulse1 - pulse2);
    let pulseResult2 = (pulse2 - pulse3);
    let pulseResult3 = (pulse3 - pulse1);
    if (pulseResult1 < 0) { pulseResult1 *= -1; };
    if (pulseResult2 < 0) { pulseResult2 *= -1; };
    if (pulseResult3 < 0) { pulseResult3 *= -1; };
    console.log(pulseResult1);
    console.log(pulseResult2);
    console.log(pulseResult3);

    const note1 = specifyMusicNote(pulseResult1);
    const note2 = specifyMusicNote(pulseResult2);
    const note3 = specifyMusicNote(pulseResult3);
    console.log(note1);
    console.log(note2);
    console.log(note3);

    const audiosrc1 = setAudioSrc(note1);
    const audiosrc2 = setAudioSrc(note2);
    const audiosrc3 = setAudioSrc(note3);
    console.log(audiosrc1);
    console.log(audiosrc2);
    console.log(audiosrc3);

    const goHomeHandler = (event) => {
        event.preventDefault();
        dispatch(pulseActions.setDefault());
        router.push('/');
    };

    return(
        <>
        {!bigScreen && <main>
            <div>
                <label>Here are music notes for your mood:</label>
                <div>{note1}</div>
                <div>{note2}</div>
                <div>{note3}</div><br/>
                <audio controls="controls" autoPlay={true}>
                    <source src={audiosrc1} type="audio/mpeg" />
                </audio><br/>
                <audio controls="controls">
                    <source src={audiosrc2} type="audio/mpeg" />
                </audio><br/>
                <audio controls="controls">
                    <source src={audiosrc3} type="audio/mpeg" />
                </audio><br/>
                <div className={styles.control}>
                    <button onClick={goHomeHandler}>Home</button>
                </div>
            </div>
            <Instruction />
        </main>}
        {bigScreen && <main className={classes.row}>
            <div className={classes.column}>
                <label>Here are music notes for your mood:</label>
                <div>{note1}</div>
                <div>{note2}</div>
                <div>{note3}</div><br/>
                <audio controls="controls" autoPlay={true}>
                    <source src={audiosrc1} type="audio/mpeg" />
                </audio><br/>
                <audio controls="controls">
                    <source src={audiosrc2} type="audio/mpeg" />
                </audio><br/>
                <audio controls="controls">
                    <source src={audiosrc3} type="audio/mpeg" />
                </audio><br/>
                <div className={styles.control}>
                    <button onClick={goHomeHandler}>Home</button>
                </div>
            </div>
            <div className={classes.column}>
                <Instruction />
            </div>
        </main>}
        </>
    );
}