---
date: "2023-12-15T09:33:51-08:00"
title: Initial Brompton Setup
summary: TODO
draft: true
resources:
  - src: "*16x9*"
    params:
      alt: TODO
tags:
  - projects
  - brompton
---

It takes a lot to dial in a bike. I've had a cold this week, so I did most of this at home without a bike stand.

## Things To Fix

Most nearly-assembled bikes from a factory have a litany of problems. It's one reason I'm against direct-to-consumer bikes.[^3] Sure, they tell you to take them to a bike shop for assembly. But that's a bad deal for the bike shop.[^1] And if the bike doesn't get to a trained mechanic then many subtle problems could be missed — or one might not realize something could/should be better. My [Kona Dew-E]({{< ref "/tags/egret" >}}) had so many things to adjust.[^2] My Brompton came folded up in the box from the distributor and the only assembly was putting the saddle/Pentaclip on.

[^1]: Bike shop doesn't get the margin from a sale. But they get a shitty margin on the high-labor task of assembling a random direct-to-consumer bike. Of course, some are better than others.
[^2]: A particularly annoying one just as an example: the battery mount was not correctly setup. This made it very hard to get the battery in and out. Eventually the mount loosened up enough that the battery lock didn't even retain the battery. I once had the battery fall out when I accidentally put some pressure on it while carrying the bike. Shimano offers a gauge to align and set the length of the battery mount correctly. But that's a niche tool and kind of expensive.
[^3]: tbh I don't think most bikes should be sold as completes. Bikes should be sold through your local bike shop with consultation on (at minimum!) contact points (grips, saddle, pedals, bars).

1. The seatpost chronically slips. See [below]({{< ref "#seatpost-slipping" >}}).
1. The barrel adjusters on the brakes were loose and in different states out of the box. They probably shook loose during shipping.
1. The front fender was misaligned — was able to fix by just rotating the whole assembly at the crown bolt a smidge.
1. The brake pads were not toed in correctly.
1. The cable ends weren't well crimped. I was adjusting the rear brake and its crimped end came off trivially. I might swap them for a little splash of color anyway.
1. I loosened the axle nuts to ensure the wheels were fully seated in the drop outs. I'm not fully convinced the axle nuts were as tight as they should be.

## Fit Tweaks

1. The stock grips and handlebar backsweep are not great. The (lack of) backsweep puts my wrists in radial deviation. I swapped the grips for the [Ergon GS1 Evos](https://ergonbike.shop/products/gs1-evo). They don't fit all the way on the bar — they're about 15mm short. I think that's probably fine for the riding the Brompton will be doing. Ergon tells you not to do this. I also got the large size and should've sized down. That would happen to take less grip space, too.
1. I brought the brake lever reach in — especially needed with the larger Ergon grips.
1. The standard seatpost is just barely long enough for me. I'm 5'8" and flipped the Pentaclip over to have the saddle rails biased upwards. I also placed the Pentaclip further up the seatpost. tbh I really like the Pentaclip. I usually don't like single-bolt seatposts where fore/aft, height, and saddle pitch are all on the same assembly. But the Pentaclip works surprisingly smoothly. It might just be manufactured well. Not sure. The bolt it comes with is weirdly soft for something specced at 15 Nm though.
1. I pitched the handlebars inwards toward the saddle a smidge. This also means I screwed in the handlebar catch nipple so that fold is tighter (after making the fold larger with the bars sticking out more).

## Gearing

I swapped the stock 50T chainring to a 38T Sugino ring — now all the gears are 24% easier. The crank spider is a hair too big for a 38T ring even though the BCD is correct. There are two points on the chainring at any time where the chain isn't fully mated with the rim. I might dremel a bit of material off the inboard side of the spider to fix this if it's a problem and I like the gearing.

## Seatpost Slipping

This one gets its own section because it's an infamous and stubborn issue with Bromptons. This is the biggest issue I've had so far. If you search "seatpost slipping" on r/brompton you'll find a loooot of results. I've only been going on ~2km rides since I've been sick but the seatpost slips every time.

Brompton seatposts are designed to operate grease-free. Any contaminant, including fingerprint oil or residues from manufacturing, can cause them to slip. This isn't called out in the owner's manual as much as it should be, IMO. A bit in the "Cleaning & Lubrication" section notes not to grease them.

>When lubricating your Brompton, avoid getting oil or grease on the seatpost or the wheel rims.

But nowhere do they explicitly say not to touch the seatpost with your hands, which seems to be the long-term solution for many.

A mechanic working on many Bromptons told me that the quick release nut is always under tightened from the factory. There's some mixed messaging on how much you can safely tighten this before you risk frame damage. The seat clamp [datasheet](https://us.brompton.com/support/bikes/c-line/manuals-and-datasheets) says:

>As a guide, with the seat clamp lever forward (i.e. done up), the adjustor nut AN should be tightened with a torque in the range 4-7NM and the maximum closing force needed at the end of the lever while securing the clamp should lie in the range 80-120N. The correct setting will depend on the weight and strength of the user.

The official Brompton YouTube channel says to have at most 3mm of exposed thread past the nylock ([timestamped video](https://youtu.be/KIA8ylq_-Po?si=PaZtBsdx2wN7yv4k&t=262)). I tightened it bit by bit until I hit that 3mm point and this did not fix my issue.

I've also heard that the seat post sleeve is over-reamed from the factory. This means you need to get a new one and have it reamed with a Brompton-specific tool.

## Dream Future

If this bike works for me then there's a number of things I'll probably do over time.

1. Dynamo hub and lights. I'd have Kat build them! Brompton's store sells wheels with an [SP-8-FC hub](https://www.sp-dynamo.com/series8-sv8fc) in them. I'd probably do a [SON XS](https://nabendynamo.de/en/products/hub-dynamos/for-folding-bikes/) over a [SP (Shutter Precision)](https://www.sp-dynamo.com/series9-sv9fc) due to reliability concerns and wholesale availability. I'm not sure whether I'd do the semi-radially laced SON XS or the klassik. I've asked SON for more details on the semi-radial lacing.
1. Replace the dust caps on the crank bolts with bronze or brass ones, just for aesthetics.
1. [Bubbly quick-release pedals](https://www.sim.works/collections/pedals-simworks-by-mks/products/bubbly-pedal-ez-superior)!! I'm gonna try Ben's on this bike and see if I like them.
1. Maybe a rear rack or easy wheels or mudguard wheel extenders (I can't imagine those work well) or something to make the Brompton a little more rollable. 3rd-party easy wheels look nicer than the Brompton ones but using them (at least on your rear frame?) voids your warranty. The Brompton ones are designed to be a crumple zone to protect the rear frame.