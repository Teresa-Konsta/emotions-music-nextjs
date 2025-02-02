export default function Description() {
    return(
        <div>
            <p>
                <h3>Behind the Stage</h3>
            </p>
            <p>
                It is supposed to be an IoT device: software (website and mobile app) with electrodes
                that will take input from users about their current emotional state of mind.
                Based on the input, it is supposed to generate music notes corresponding to a user&#8217;s mood.
                Here is what stands behind this functionality.
            </p>
            <p>
                There is a polygraph, a device and a program, that scans data from sensors attached to the user
                (pulsation, breath, heartbeat, voice tone, palms sweating, fingerprint hardness, etc.).
                The polygraph does not determine if a person tells the truth or lies.
                It indicates certain changes in the body and outputs these changes.
                These changes = changes in the mood and emotional state of a user.
            </p>
            <p>
                This AI prototype generates music notes based on the current user&#8217;s mood indicated by simple user pulse input.
                Music notes correspond to colors, and colors - to the emotional state of mind from the input.
                I use a psychology of color by Max Lüscher, who established the connection between colors and emotional well-being.
            </p>
        </div>
    );
};