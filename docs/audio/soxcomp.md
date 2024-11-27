## SOX COMPRESSION TYPES

This command applies basic audio compression to the input.wav file using the "compand" effect with specified settings for attack, decay, and levels.
```bash
sox input.wav output.wav compand 0.3,1 -90,-90,-70,-70,-60,-20,0,0 -5
```
This command applies audio compression to the input.wav file with custom attack, decay, and level settings.
```bash
sox input.wav output.wav compand 0.3,1 -6,-3 0,-90,-70,-70,-60,-20,0,0 -5
```
This command applies audio compression to the input.wav file with a soft knee of 0.5, which gradually reduces the gain reduction as the signal approaches the threshold.
```bash
sox input.wav output.wav compand 0.3,1 -90,-90,-70,-70,-60,-20,0,0 -5 -k 0.5
```
This command applies audio compression to the input.wav file with output limiting enabled, which prevents the output from exceeding the specified levels.
```bash
sox input.wav output.wav compand 0.3,1 -90,-90,-70,-70,-60,-20,0,0 -5 -L
```
This command applies audio compression to the input.wav file with an expander applied after compression, which increases the dynamic range of the output signal.
```bash
sox input.wav output.wav compand 0.3,1 -90,-90,-70,-70,-60,-20,0,0 -5 5
```
This command applies audio compression to the input.wav file with custom ratio and threshold settings.
```bash
sox input.wav output.wav compand 0.3,1 6:-70,-60,-20 0,-20,-12,-12,-6,-8,0,0 -5
```
This command applies audio compression to the input.wav file with pre-emphasis enabled, which emphasizes the attack portion of the audio signal.
```bash
sox input.wav output.wav compand 0.3,1 -70,-60,-20,-20,-10,-8,-5,-5 -7 -p 0.3>
```
This command applies audio compression to the input.wav file with adaptive release time enabled, which adjusts the release time of the compression based on the characteristics of the input signal.
```bash
sox input.wav output.wav compand 0.3,1 -90,-90,-70,-70,-60,-20,0,0 -a 0.3
```
This command applies audio compression to the input.wav file with logarithmic attack and decay, which provides a smooth compression curve.
```bash
sox input.wav output.wav compand 0.3,1 -90,-90,-70,-70,-60
```
