'use client'
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { useMediaQuery } from "react-responsive";
import { pulseActions } from '@/store/pulse-slice';
import Head from 'next/head';
import PulseInput from '@/components/layout/PulseInput';
import Description from "@/components/guide/Description";
import styles from '../styles/Guide.module.css';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery({ query: '(min-width: 990px)' });

  const getPulseHandler = (inputs) => {
    dispatch(pulseActions.setPulseInputs({
      pulseInput1: inputs.input1,
      pulseInput2: inputs.input2,
      pulseInput3: inputs.input3
    }));
    router.push('/music-notes');
  };

  return (
    <>
      <Head>
        <title>Emotions to Music</title>
        <meta name="description" content="Transfers emotions to music notes" />
      </Head>
      {!bigScreen && <main>
            <PulseInput onGetPulseInputs={getPulseHandler} />
            <Description />
      </main>}
      {bigScreen && <main className={styles.row}>
          <div className={styles.column}>
            <PulseInput onGetPulseInputs={getPulseHandler} />
          </div>
          <div className={styles.column}>
            <Description />
          </div>
      </main>}
    </>
  )
}