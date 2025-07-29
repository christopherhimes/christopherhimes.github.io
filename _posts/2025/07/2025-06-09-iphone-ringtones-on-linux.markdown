---
layout: post
type: post
title:  "iPhone Ringtones on Linux"
date:   2025-07-29 17:36:00
tags: ['iphone', 'linux', 'ringtones', '100 Days To Offload']
blurb: I wanted a custom ringtone on my iPhone from my Linux machine.
comments:
    id: 
---

I don't want to use iTunes on a virtual machine to add a custom ringtone. Apple doesn't make a Linux supported version of iTunes. For these reasons I went looking for a solution to get some custom ringtone files onto my iPhone.

First if you don't know you can use Audacity to take an MP3 and cut it to ringtone size. This can be done by opening your file in Audacity and selecting the bit of the song you want to use. 

Then you go to Edit > Remove Special > Trim Audio. This file should be saved as an m4a and renamed to m4r. There's no conversion required just change the file extension.

Now that we have the file we need to get it onto the phone. That requires getting file access to the iphone and mounting it so your machine can interact. 

To do that I installed both 'libimobiledevice' and 'ifuse'. Then I created a folder 'mkdir ~/iphone' and used ifuse to mount the iphone as storage 'ifuse ~/iphone'. 

From here I could navigate to '~/iphone/iTunes_Control/Ringtones' and place the ringtone file I just created.

With the file on the iPhone I needed to tell iOS that it existed. To do this I used a [plist editor] to add a new record to '~/iphone/iTunes_Control/iTunes/Ringtones.plist'.

Here I copied an existing one, updated the ringtone name, updated the file name, changed the GUID and PID to be unique, and saved the file. After unmounting the iphone and restarting it the ringtone was available to select in the settings. 

It appears to have worked. I do wonder though if there is a better way.

[plist editor]: https://github.com/ic005k/Xplist/releases/tag/1.2.47