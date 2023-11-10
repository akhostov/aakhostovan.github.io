---
layout: project
title: Public COSMOS Spectroscopic Archive
caption: I am leading the gathering and processing of all spectroscopic data taken in the COSMOS field over the past 10 - 15 years with goal being to create a legacy product and data visualization tools for the community.
description: >
  The main ground-based observatories for which we have mined their respective archives and reduced raw data into science-grade, flux-calibrated 1D and 2D spectra.
date: '01-11-2023'
image: 
  path: /assets/research/spec_archive/telescopes.png
  srcset: 
    1920w: /assets/research/spec_archive/telescopes.png
    960w:  /assets/research/spec_archive/telescopes.png
    480w:  /assets/research/spec_archive/telescopes.png
links:
  - title: Redshift Wrangler
    url: https://www.zooniverse.org/projects/jeyhansk/redshift-wrangler
  - title: Pypeit
    url: https://pypeit.readthedocs.io/en/release/
  - title: pypeit2specpro
    url: https://github.com/akhostov/pypeit2specpro
featured: false
sitemap: false
---


It is an exciting time to be part of observational extragalactic astrophysics because we have all sorts of new toys that are coming online with *JWST* now gathering data and *Euclid* having been recently launched. We also have more cool facilities such as *Roman*, LSST, Vera Rubin Observatory, and various ground-based Extremely Large Telescopes (ELTs) coming in the near future which will all provide us with a great wealth of imaging and spectroscopic data that will keep everyone busy for the next few decades. 

At the same time as new data is coming in, we as astronomers have amassed an astronomical amount of data from past observations over the past decade with many of it not published and/or not utilized to its fullest extent (e.g., fillers and lower priority targets). All of this data is essentially collecting dust within observatory archives and can be used to enable new and future science! What is needed is for a group of astronomers to band together and gather all the data within these archives, process them, analyze them, and present it to the community in the form of legacy products that anyone can have access to. 

Jeyhan Kartaltepe (RIT) and Caitlin Casey (UT Austin) led the front in two key proposals that were awarded funding to form a group that would lead this effort in forming a public COSMOS spectroscopic archive. I was hired by Jeyhan to lead the effort in processing Gemini, VLT, and Subaru spectroscopic datasets while Santosh Harish (RIT) is working on the Keck datasets. In total, we identified $$\sim 1300$$ masks corresponding to $$\sim 10000$$ hours of exposure time and estimate a total of $$\sim 250000$$ galaxies up to $$ z \sim 9 $$ would make up the final compilation. 

I led the data mining and reductions processed into high-quality, science-grade products. Majority of data reduction was done using a customized version of [Pypeit](https://pypeit.readthedocs.io/en/release/)(e.g., customized to process Gemini/GMOS data of varying configurations). Other data reduction pipelines for instruments not supported by Pypeit were used. For example, I used [FIBRE-pac]{https://www.naoj.org/Observing/Instruments/FMOS/information.html} data reduction pipeline to process Subaru/FMOS data. Currently, I reduced hundreds of masks from Gemini/GMOS+GNIRS+F2, Subaru/FMOS, and VLT/X-SHOOTER and I am leading 2 survey papers on the FMOS & GMOS data (coming soon 2024).


![r0_evolution](/assets/research/spec_archive/RedshiftWrangler.png){:width="100%"}
<span style="font-size: small;">Our citizen science project, [Redshift Wrangler](https://www.zooniverse.org/projects/jeyhansk/redshift-wrangler), led by Sadie Coffin (RIT PhD Student). I was involved as one of the core team members in developing Redshift Wrangler and incorporating 1D and 2D spectra that I reduced as part of my archival work. Come and join us identify emission lines and check nebular emission line profile fits.</span>


Analyzing the data is also a big, daunting task given the sheer volume of 1D spectra that needs to be visually inspected and redshifts measured. In doing so, our group launched a citizen science program called [Redshift Wrangler](https://www.zooniverse.org/projects/jeyhansk/redshift-wrangler) led by Sadie Coffin (RIT PhD student). This program is advised by Jeyhan Kartaltepe (RIT) and developed by myself and PhD students: Rohan Pattnaik and Fiona Hufford. We also had contributions from undergraduate interns: Ash Bista, Jon Fitch, Amy Culig, and Sangeeta Kumar. The purpose of Redshift Wrangler is to have citizen scientists visually inspect 1D and 2D spectra and highlight regions where they find emission and absorption line features. These highlighted regions are then analyzed semi-automatically using scripts written by Sadie Coffin to process citizen scientist inputs and convert them into spectroscopic redshifts. Once redshifts are measured, public tools such as [PyQSOFit](https://github.com/legolason/PyQSOFit) is used to measure nebular emission line profiles and fine-tune spectroscopic redshifts. Outputs of PyQSOFit are then shown to citizen scientists who visually check the robustness of each fit and identify any issues. There is also work being led by Rohan Pattnaik to incorporate a convoluted neural network approach to fit nebular emission line profiles which would allow for efficient extraction of key nebular emission line and ISM properties (without the need to use classical/empirical calibrations).


I am also working with Andreas Faisst (IPAC) on incorporating 1D and 2D spectra from the archive via SQL database scripts into the *Euclid* spec-$$z$$ tool developed by Florian Dubath (UNIGE) which will be used by astronomers in the COSMOS team to measure redshifts. This is another avenue that we are pursuing to efficiently and robustly analyze the spectroscopic archive.



<!--
I led, along with Jeyhan Kartaltepe (RIT; PI), the groundwork for a public spectroscopic archive where I mined the Subaru, Gemini, and VLT archives for all spectroscopic data taken in COSMOS. We identified ∼ 1300 masks (∼ 10000 hours) and estimate ∼ 250000 galaxies up to z ∼ 9. I led the data mining and reductions processed into high-quality, science-grade products. Majority of data reduction was done using Pypeit [25] while Subaru/FMOS data was reduced with FIBRE-pac [16]. Currently, I reduced hundreds of masks from Gemini/GMOS+GNIRS+F2, Subaru/FMOS, and VLT/X-SHOOTER and I am leading 2 survey papers on the FMOS & GMOS data.
Analysis of the data is in progress primarily through our citizen science project (Redshift Wrangler) that I am involved with and led by Sadie Coffin (RIT PhD student) where the community helps us to identify spectral features, measure redshifts, and check the quality of emission line fits. I also worked with Andreas Faisst (IPAC) to prepare the Euclid spec-z tool developed by Florian Dubath (UNIGE) for the COSMOS team to measure redshifts from galaxies in our archive (work in progress). 1D & 2D spectra, line fits, and redshifts will be made available to the public upon completion via IPAC/IRSA.

-->