---
date: "{{ .Date }}"
title: {{ replace .File.ContentBaseName "-" " " | title }}
summary: TODO
draft: true
resources:
  - src: "*16x9*"
    params:
      alt: TODO
---