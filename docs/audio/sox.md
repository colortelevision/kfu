## SOX

```bash
brew install sox
```
# All-pass filter
```bash
sox huh.mp3 output_allpass.mp3 allpass 1000 0.5
```
# Band-pass filter
```bash
sox huh.mp3 output_bandpass.mp3 bandpass 1000 200
```
# Band-reject filter
```bash
sox huh.mp3 output_bandreject.mp3 bandreject 1000 200
```
# Bass boost
```bash
sox huh.mp3 output_bass.mp3 bass +20
```
# Pitch bend
```bash
sox huh.mp3 output_bend.mp3 bend 0.5,1000,0.8
```
# Biquad filter
```bash
sox huh.mp3 output_biquad.mp3 biquad 1 1 1 1 1
```
# Chorus effect
```bash
sox huh.mp3 output_chorus.mp3 chorus 0.7 0.9 55 0.4 0.25 2 -t
```
# Change number of channels
```bash
sox huh.mp3 output_channels.mp3 channels 1
```
# Dynamic range compression
```bash
sox huh.mp3 output_compand.mp3 compand 0.3,1 6:-70,-60,-20 -5 -90 0.2
```
# Contrast enhancement
```bash
sox huh.mp3 output_contrast.mp3 contrast 75
```
# DC shift
```bash
sox huh.mp3 output_dcshift.mp3 dcshift 0.02
```
# De-emphasis filter
```bash
sox huh.mp3 output_deemph.mp3 deemph
```
# Delay effect
```bash
sox huh.mp3 output_delay.mp3 delay 1
```
# Dithering
```bash
sox huh.mp3 output_dither.mp3 dither -s
```
# Echo effect
```bash
sox huh.mp3 output_echo.mp3 echo 0.8 0.9 1000 0.3
```
# Sequence of echoes
```bash
sox huh.mp3 output_echos.mp3 echos 0.8 0.9 1000 0.3 2000 0.25
```
# Equalization
```bash
sox huh.mp3 output_equalizer.mp3 equalizer 1000 1q +5
```
# Fade effect
```bash
sox huh.mp3 output_fade.mp3 fade h 0.5 1 0.5
```
# Flanger effect
```bash
sox huh.mp3 output_flanger.mp3 flanger 0.6 0.87 3.0 0.9 0.5 -s
```
# Gain adjustment
```bash
sox huh.mp3 output_gain.mp3 gain -n
```
# High-pass filter
```bash
sox huh.mp3 output_highpass.mp3 highpass 1000
```
# Input file specification
```bash
sox -r 44100 -e signed -b 16 -c 1 huh.mp3 output_input.mp3
```
# Loudness control
```bash
sox huh.mp3 output_loudness.mp3 loudness -5
```
# Low-pass filter
```bash
sox huh.mp3 output_lowpass.mp3 lowpass 1000
```
# Multiband companding
```bash
sox huh.mp3 output_mcompand.mp3 mcompand "0.5,1 -47,-40,-34,-34,-17,-33" 100 "0.003,0.05 -47,-40,-34,-34,-17,-33"
```
# Noise reduction
```bash
sox huh.mp3 output_noisered.mp3 noisered noise.prof 0.3
```
# Normalization
```bash
sox huh.mp3 output_norm.mp3 norm
```
# Out Of Phase Stereo effect
```bash
sox huh.mp3 output_oops.mp3 oops
```
# Output file specification
```bash
sox huh.mp3 output_output.mp3
```
# Overdrive effect
```bash
sox huh.mp3 output_overdrive.mp3 overdrive 10 20
```
# Pad with silence
```bash
sox huh.mp3 output_pad.mp3 pad 2 3
```
# Phaser effect
```bash
sox huh.mp3 output_phaser.mp3 phaser 0.89 0.85 1 0.24 2 -t
```
# Pitch change
```bash
sox huh.mp3 output_pitch.mp3 pitch 500
```
# Resampling
```bash
sox huh.mp3 output_rate.mp3 rate 22050
```
# Remix channels
```bash
sox huh.mp3 output_remix.mp3 remix 1,2
```
# Repeat audio
```bash
sox huh.mp3 output_repeat.mp3 repeat 2
```
# Reverb effect
```bash
sox huh.mp3 output_reverb.mp3 reverb
```
# Reverse audio
```bash
sox huh.mp3 output_reverse.mp3 reverse
```
# RIAA vinyl playback equalisation
```bash
sox huh.mp3 output_riaa.mp3 riaa
```
# Remove silence
```bash
sox huh.mp3 output_silence.mp3 silence 1 0.1 1% -1 0.1 1%
```
# Sinc filter
```bash
sox huh.mp3 output_sinc.mp3 sinc 20-4k
```
# Spectrogram creation
```bash
sox huh.mp3 -n spectrogram
```
# Speed adjustment
```bash
sox huh.mp3 output_speed.mp3 speed 1.5
```
# Splice audio
```bash
sox huh.mp3 output_splice.mp3 splice 1.5,2.5
```
# Statistical information
```bash
sox huh.mp3 -n stat
```
# Stretch audio
```bash
sox huh.mp3 output_stretch.mp3 stretch 1.5
```
# Swap audio channels
```bash
sox huh.mp3 output_swap.mp3 swap
```
# Synthesize audio
```bash
sox -n output_synth.mp3 synth 3 sine 300-3300
```
# Tempo adjustment
```bash
sox huh.mp3 output_tempo.mp3 tempo 1.5
```
# Treble boost
```bash
sox huh.mp3 output_treble.mp3 treble +20
```
# Tremolo effect
```bash
sox huh.mp3 output_tremolo.mp3 tremolo 10 .25
```
# Trim audio
```bash
sox huh.mp3 output_trim.mp3 trim 0 10
```
# Upsampling
```bash
sox huh.mp3 output_upsample.mp3 upsample 2
```
# Voice activity detection
```bash
sox huh.mp3 output_vad.mp3 vad
```
# Volume adjustment
```bash
sox huh.mp3 output_vol.mp3 vol 3
```

plays a synthesised ‘A minor seventh’ chord with a pipe-organ sound
```bash
play −n −c1 synth sin %−12 sin %−9 sin %−5 sin %−2 fade h 0.1 1 0.1
```
