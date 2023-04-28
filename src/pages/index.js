import { useDispatch } from "react-redux";
import { pulseActions } from '@/store/pulse-slice';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PulseInput from '@/components/layout/PulseInput';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

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
      <main>
        <PulseInput onGetPulseInputs={getPulseHandler} />
      </main>
    </>
  )
}