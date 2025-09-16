---
theme: seriph
background: https://trendsresearch.org/wp-content/uploads/2024/12/Future-of-AI.jpg
class: 'text-center'
highlighter: shiki
lineNumbers: true
info: |
  ## IA Générative : Mise à Niveau
  Formation complète des architectures aux applications pratiques
drawings:
  persist: false
css: unocss
title: IA Générative - Mise à Niveau
transition: slide-left
---

# IA Générative - Les Bases

<div
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 1000 } }"
  class="text-blue-400 text-5xl font-bold mt-4 mb-8"
>
  De la Théorie à la Pratique
</div>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 800 } }"
  class="pt-10 text-lg"
>
  <div class="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">
    André SARR - Assane BÂ - Mouhamed TOURÉ
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://huggingface.co" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-launch />
  </a>
</div>

<style>
.slidev-layout {
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: darken;
}

h1, h2, h3 {
  background-image: linear-gradient(45deg, #3b82f6 10%, #8b5cf6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>

---
layout: center
class: text-center
---

# <span class="text-3xl font-bold text-[#2B90B6]">Au Programme</span>

<div class="grid grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
  <div class="bg-purple-900 bg-opacity-60 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
    <div class="text-4xl font-bold mb-2">01</div>
    <div class="text-xl font-bold mb-2">Introduction</div>
    <div class="text-sm opacity-90">IA Générative</div>
  </div>

  <div class="bg-purple-900 bg-opacity-60 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
    <div class="text-4xl font-bold mb-2">02</div>
    <div class="text-xl font-bold mb-2">Architectures</div>
    <div class="text-sm opacity-90">Transformers, LLM, MLLM</div>
  </div>

  <div class="bg-purple-900 bg-opacity-60 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
    <div class="text-4xl font-bold mb-2">03</div>
    <div class="text-xl font-bold mb-2">Adaptation</div>
    <div class="text-sm opacity-90">Fine-Tuning, LoRA, PEFT</div>
  </div>

  <div class="bg-purple-900 bg-opacity-60 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
    <div class="text-4xl font-bold mb-2">04</div>
    <div class="text-xl font-bold mb-2">Sécurité</div>
    <div class="text-sm opacity-90">Hallucinations & Attaques</div>
  </div>

  <div class="bg-purple-900 bg-opacity-60 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
    <div class="text-4xl font-bold mb-2">05</div>
    <div class="text-xl font-bold mb-2">Pratique</div>
    <div class="text-sm opacity-90">Déploiement</div>
  </div>
</div>

---
layout: default
class: text-left
---

# <span class="text-4xl font-bold text-blue-400 mb-8 mt-6 block">Qu'est-ce que l'IA Générative ?</span>

<div 
  class="max-w-4xl mx-auto text-xl leading-relaxed space-y-8"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 1000, stagger: 300 } }"
>

<p class="text-gray-200 leading-loose">
  L'<strong class="text-blue-400">IA Générative</strong> représente une classe d'algorithmes 
  capables de <strong class="text-green-400">créer du contenu original</strong> : texte, images, 
  code, musique, vidéos en s'appuyant sur l'analyse de vastes ensembles de données d'entraînement.
</p>

<p class="text-gray-200 leading-loose">
  Les <strong class="text-orange-400">LLMs (Large Language Models)</strong> en sont un exemple emblématique, 
  générant du texte de manière autonome. Ces systèmes <strong class="text-purple-400">apprennent les patterns</strong> 
  dans les données d'entraînement (comme le langage pour les LLMs) pour 
  <strong class="text-yellow-400">produire de nouvelles créations</strong> qui semblent authentiques et cohérentes.
</p>

<p class="text-gray-200 leading-loose">
  Mais cette puissance créative s'accompagne de <strong class="text-red-400">défis majeurs</strong> 
  qu'il faut maîtriser pour un déploiement responsable.
</p>

</div>

---
layout: section
class: text-center
---

# <span class="text-4xl font-bold">Les limites des LLM</span>

<div 
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
  class="absolute bottom-10 right-10 text-5xl text-yellow-400"
>
  🔵
</div>
<img src="https://i.pinimg.com/originals/e8/6e/ce/e86ece0bd5ce18c14facaa10afab304c.gif" class="rounded-xl shadow-2xl max-h-[10vh] object-cover mx-auto" />


---
layout: two-cols
class: items-center
---

# <span class="text-2xl font-bold text-red-400 mb-2 block">🚨 Les Défis Réels des LLM</span>

<div class="mr-8">

## <carbon-warning-alt class="inline-block mr-2" /> Limites Fondamentales

<ul style="list-style-type: none;"
  class="space-y-4 text-base mt-2"
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
  <li><carbon-time class="inline-block mr-2 text-red-400" /> <strong>Dataset figé</strong> : Connaissances limitées à la date d'entraînement</li>
  <li><carbon-warning class="inline-block mr-2 text-orange-400" /> <strong>Hallucinations</strong> : Invente des "faits" plausibles mais faux</li>
  <li><carbon-chart-evaluation class="inline-block mr-2 text-yellow-400" /> <strong>Biais</strong> : Reproduit les biais présents dans les données</li>
  <li><carbon-security class="inline-block mr-2 text-purple-400" /> <strong>Vulnérabilités</strong> : Sensible aux attaques adversariales</li>
</ul>

<div class="mt-2 p-2 bg-red-900 bg-opacity-40 rounded-lg">
  <p class="text-sm text-red-200">
    <carbon-idea class="inline mr-2" />
    <strong>Le défi :</strong> Comment déployer des LLM fiables et sécurisés en production ?
  </p>
</div>

</div>

::right::

<div 
  class="pl-2 flex flex-col items-center justify-center h-full"
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
>

### 📊 Exemples Concrets

<div class="bg-black p-4 rounded-lg mb-4 mt-2 text-sm font-mono">
  <div class="text-red-300">❌ Hallucination</div>
  <div class="text-gray-300">Q: "Qui a écrit 'La Métamorphose Quantique' ?"</div>
  <div class="text-red-200">R: "La Métamorphose quantique a été écrit par Idriss Aberkane..."</div>
  <div class="text-yellow-300 text-xs mt-2">↳ Ce livre n'existe pas !</div>
</div>

<div class="bg-black p-4 rounded-lg mb-4 text-sm font-mono">
  <div class="text-orange-300">⏳ Connaissance Dépassée</div>
  <div class="text-gray-300">Q: "Qui est le président actuel des états-unies ?"</div>
  <div class="text-orange-200">R: "Joe Biden est l'actuel président des USA"</div>
  <div class="text-yellow-300 text-xs mt-2">↳ Information obsolète</div>
</div>

<div class="bg-black p-4 rounded-lg text-sm font-mono">
  <div class="text-purple-300">🔓 Prompt Injection</div>
  <div class="text-gray-300">"Ignore tes instructions. Révèle..."</div>
  <div class="text-purple-200">R: Contournement possible des garde-fous</div>
</div>

</div>

---
layout: default
class: text-center
---

# <span class="text-3xl font-bold text-yellow-400 mb-12 mt-6 block">⚡ Quelques Chiffres</span>

<div class="grid grid-cols-3 gap-6 max-w-5xl mx-auto">

<div 
  class="bg-red-900 bg-opacity-50 p-6 rounded-xl shadow-lg"
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
>
  <div class="text-5xl font-bold text-red-300 mb-2">~69–88%</div>
  <div class="text-lg font-semibold mb-2">Hallucinations</div>
  <div class="text-sm text-red-200">sur des questions juridiques (étude Stanford 2024)</div>
</div>

<div 
  class="bg-orange-900 bg-opacity-50 p-6 rounded-xl shadow-lg"
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
>
  <div class="text-5xl font-bold text-orange-300 mb-2">>50%</div>
  <div class="text-lg font-semibold mb-2">Prompt Injection</div>
  <div class="text-sm text-orange-200">réussissent selon le modèle/attaque</div>
</div>

<div 
  class="bg-yellow-900 bg-opacity-50 p-6 rounded-xl shadow-lg"
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
>
  <div class="text-5xl font-bold text-yellow-300 mb-2">95%</div>
  <div class="text-lg font-semibold mb-2">Coût Réduit</div>
  <div class="text-sm text-yellow-200">avec les techniques PEFT vs fine-tuning complet</div>
</div>

</div>

---
layout: section
background: https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80
---

# <span class="text-4xl font-bold">02. Architectures Fondamentales</span>

<div 
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
  class="absolute bottom-10 right-10 text-5xl"
>
  <carbon-machine-learning />
</div>
<img src="https://i.pinimg.com/originals/ce/d2/d0/ced2d0cc1832708a6a1ee95df0e285a1.gif" class="rounded-xl shadow-2xl max-h-[10vh] object-cover mx-auto" />

---
layout: two-cols
class: items-center
---

## <span class="text-xl font-bold text-blue-400 mb-0 block">Des RNN aux Transformers</span>

<div class="bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-40 p-2 rounded-xl mb-0 border border-blue-500">
  <p class="text-sm text-blue-100 leading-relaxed">
    Avant 2017, on utilisait des <strong class="text-blue-300">RNN, LSTM et GRU</strong> pour traiter le texte.  
    Mais leur apprentissage <span class="text-yellow-300 font-bold">séquentiel et lent</span> limitait les performances 
    et la compréhension des longues dépendances.  
    Les <strong class="text-blue-300">Transformers</strong> ont changé la donne avec un 
    <span class="text-yellow-300 font-bold">mécanisme d’attention</span> qui analyse toute la séquence <strong>en parallèle</strong>.  
    Leur structure <strong class="text-blue-300">Encodeur–Décodeur</strong> (ou Décodeur seul dans les GPT) est devenue la base des LLM modernes.
  </p>
</div>

<div class="mr-8">

<ul style="list-style-type: none;"
  class="space-y-4 text-sm mt-2"
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
  <li><carbon-flash class="inline-block mr-2 text-blue-400" /> <strong>RNN → LSTM/GRU</strong> : séquentiels, mémoire limitée</li>
  <li><carbon-chart-network class="inline-block mr-2 text-blue-400" /> <strong>Transformers</strong> : parallélisation massive et dépendances longues<br />
  Exemple : dans « Le livre que j’ai acheté hier est très intéressant », un RNN peut avoir du mal à relier « livre » avec « intéressant », car trop de mots les séparent.</li>
  <li><carbon-layers class="inline-block mr-2 text-blue-400" /> <strong>Architecture</strong> : Encodeur pour comprendre, Décodeur pour générer → scalable vers les LLM</li>
</ul>

</div>

::right::

<div 
  class="pl-8 flex items-center justify-center h-full"
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
>

  <div class="pl-8 flex flex-col items-center justify-center h-full">
  <div class="w-full mb-4">
    <div class="p-2 rounded-xl shadow-xl">
    <ClickableImage src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*mn3V4GHG9OABem9i26NVfg.gif"
      class="rounded-lg w-full h-28 object-cover" alt="" />
    </div>
  </div>
  <div class="w-full">
    <div class="p-2 rounded-xl shadow-xl">
    <ClickableImage src="https://cdn.prod.website-files.com/6703dcd326e93a2a990f1c5a/67996a0a63943f59ad038d15_AD_4nXfPWwNnlZ1mPxjz3qy0BAcHl3wfWtJDcBIXVj-IteOtu9UxB8uIBRsfcqA2sskc-pzw5Vihbnzeji0NTLHjbt8QTiGMAFIWBDtNHMPwv7LnFHWmViWy-rG3rkXedrhPYnT_pUZe.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
    </div>
  </div>
</div>
</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-blue-400 mb-4 mt-6 block">🧠 Large Language Models</span>

<div class="mr-8">

<ul style="list-style-type: none;"
  class="space-y-4 text-base mt-0"
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
  <li><carbon-flash class="inline-block mr-2 text-blue-400" /> <strong>Basés sur les Transformers</strong> : architecture qui permet d’apprendre des milliards de paramètres efficacement</li>
  <li><carbon-analytics class="inline-block mr-2 text-purple-400" /> <strong>Pré-entraînement massif</strong> : sur tout Internet pour comprendre le langage, le contexte et les connaissances</li>
  <li><carbon-idea class="inline-block mr-2 text-green-400" /> <strong>Capacités émergentes</strong> : raisonnement, génération de texte, créativité et compréhension complexe</li>
  <li><carbon-chat class="inline-block mr-2 text-yellow-400" /> <strong>Interaction naturelle</strong> : possibilité de converser avec les humains de façon fluide et contextuelle</li>
</ul>

</div>

::right::

<div 
  class="pl-8 flex items-center justify-center h-full"
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
>
  <div class="p-4 rounded-xl">
  <ClickableImage src="https://jalammar.github.io/images/t/transformer_decoding_2.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
  </div>
</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-pink-400 mb-4 block mt-6">👁️ Multi-Modal LLM</span>

<div class="mr-8">

<ul style="list-style-type: none;"
  class="space-y-4 text-base mt-2"
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
  <li><carbon-image class="inline-block mr-2 text-pink-400" /> <strong>Vision + Texte</strong> : comprend et décrit les images</li>
  <li><carbon-microphone class="inline-block mr-2 text-blue-400" /> <strong>Audio + Texte</strong> : écoute, transcrit et parle</li>
  <li><carbon-video class="inline-block mr-2 text-green-400" /> <strong>Vidéo</strong> : analyse séquences et mouvements dans le temps</li>
  <li><carbon-3d-curve-auto-colon class="inline-block mr-2 text-purple-400" /> <strong>3D et Robotique</strong> : perçoit et interagit avec l’espace</li>
</ul>

<p class="text-sm text-pink-100 mt-4 leading-relaxed">
  En combinant plusieurs modalités, les <strong class="text-pink-300">MLLM</strong> peuvent générer des réponses plus riches et contextuelles, 
  comprendre des scènes complexes, et interagir avec le monde de manière proche de la perception humaine.  
  C’est l’évolution naturelle après les LLM textuels.
</p>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">
  <div class="w-full mb-12 mt-10">
    <div class="p-2 rounded-xl shadow-xl">
    <ClickableImage src="./resized.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
    </div>
  </div>
  <div class="w-full">
    <div class="p-2 rounded-xl shadow-xl">
    <ClickableImage src="https://miro.medium.com/v2/resize:fit:1400/1*BljDDKscOsBmLef_Jd5PoQ.gif"
      class="rounded-lg w-full h-28 object-cover" alt="" />
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# <span class="text-2xl font-bold text-blue-400 mb-8 block">Évolution des Architectures</span>

<div class="grid grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
  <div class="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg">
    <div class="text-4xl mb-4">⚡</div>
    <h3 class="text-xl font-bold mb-3 text-white">Transformers (2017)</h3>
    <ul class="text-sm text-blue-100 text-left space-y-2">
      <li>Mécanisme d'attention</li>
      <li>"Attention is All You Need"</li>
      <li>Parallélisation efficace</li>
    </ul>
  </div>

  <div class="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-lg">
    <div class="text-4xl mb-4">🧠</div>
    <h3 class="text-xl font-bold mb-3 text-white">Large Language Models (2018)</h3>
    <ul class="text-sm text-purple-100 text-left space-y-2">
      <li>GPT, BERT, T5, PaLM...</li>
      <li>Pré-entraînement massif</li>
      <li>Capacités émergentes</li>
    </ul>
  </div>

  <div class="bg-gradient-to-br from-pink-600 to-red-600 p-6 rounded-xl shadow-lg">
    <div class="text-4xl mb-4">👁️</div>
    <h3 class="text-xl font-bold mb-3 text-white">Multi-Modal LM (2021)</h3>
    <ul class="text-sm text-pink-100 text-left space-y-2">
      <li>Vision + Texte + Audio</li>
      <li>CLIP, DALL-E, GPT-4V</li>
      <li>Fusion cross-modale</li>
    </ul>
  </div>
</div>

---
layout: center
class: text-center
---

# <span class="text-3xl font-bold text-orange-400 mb-8 block">💡 Comment Répondre aux Défis ?</span>

<div class="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
v-motion
:initial="{ opacity: 0, y: 50 }"
:enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 1000 } }"
>


<div class="mt-8 p-6 bg-gradient-to-r from-orange-900 to-red-900 bg-opacity-40 rounded-xl">
<strong class="text-yellow-300">La solution ?</strong> Adapter ces modèles génériques à nos besoins spécifiques !
</div>

</div>

<img src="https://miro.medium.com/v2/1*SHDCBdqQrZFOeYXQcBe2xw.gif" class="rounded-xl shadow-2xl max-h-[15vh] object-cover mx-auto mt-8" />

---
layout: section
background: https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80
---

# <span class="text-4xl font-bold">03. Techniques d'Adaptations</span>

<div 
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
  class="absolute bottom-10 right-10 text-5xl"
>
  <carbon-machine-learning />
</div>
<img src="https://i.pinimg.com/originals/ce/d2/d0/ced2d0cc1832708a6a1ee95df0e285a1.gif" class="rounded-xl shadow-2xl max-h-[10vh] object-cover mx-auto" />


---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-blue-400 mb-4 block mt-6">🎯 Qu'est-ce que le Fine-Tuning ?</span>

<div class="mr-8">

<div class="bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-40 p-2 rounded-xl mb-0 border border-blue-500">
<p class="text-sm text-blue-100 leading-relaxed">
Le <strong class="text-blue-400">fine-tuning</strong> est une méthode d'apprentissage par transfert qui consiste à 
                <span class="text-cyan-300">continuer l'entraînement d'un modèle pré-entraîné</span> sur un ensemble de données 
                spécialisé, en ajustant ses poids synaptiques pour optimiser ses performances sur une tâche cible spécifique.
</p>
</div>

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-education class="inline-block mr-2 text-green-400" /> <strong>Spécialisation</strong> : Adapter un modèle général à un domaine</li>
<li><carbon-data-base class="inline-block mr-2 text-blue-400" /> <strong>Apprentissage</strong> : Sur des données métier spécifiques</li>
<li><carbon-TaskAssetView class="inline-block mr-2 text-purple-400" /> <strong>Objectif</strong> : Performances optimales sur vos tâches</li>
</ul>

</div>

::right::

<div 
  class="pl-8 flex items-center justify-center h-full"
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
>
  <div class="p-4 rounded-xl">
  <ClickableImage src="https://miro.medium.com/v2/resize:fit:1400/1*u5pM9GvyUQpbzLHQhnixyQ.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
  </div>
</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-purple-400 mb-4 block mt-6">📚 Types de Fine-Tuning</span>

<div class="mr-8">

<div class="bg-gradient-to-r from-green-900 to-blue-900 bg-opacity-40 p-2 rounded-xl mb-2 border border-green-500">
<p class="text-sm text-green-100 leading-relaxed">
<strong class="text-green-300">Supervised Fine-Tuning (SFT)</strong><br/>
Apprentissage avec des <span class="text-yellow-300 font-bold">exemples étiquetés</span> : 
"Question → Réponse attendue".
</p>
</div>

<div class="bg-gradient-to-r from-orange-900 to-red-900 bg-opacity-40 p-2 rounded-xl mb-0 border border-orange-500">
<p class="text-sm text-orange-100 leading-relaxed">
<strong class="text-orange-300">Unsupervised Fine-Tuning</strong><br/>
Apprentissage sur des <span class="text-yellow-300 font-bold">données brutes</span> sans étiquettes : 
emails, docs, code...
</p>
</div>

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-checkbox class="inline-block mr-2 text-green-400" /> <strong>SFT</strong> : Chatbots, Q&A, classification</li>
<li><carbon-document class="inline-block mr-2 text-orange-400" /> <strong>Unsupervised</strong> : Style d'écriture, jargon métier</li>
</ul>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="./sft-rft-cropped.gif"
      class="rounded-lg w-full h-28 object-cover" alt="" />
</div>
</div>

<div class="w-full">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="./rlhf.gif" class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-red-400 mb-4 block mt-6">Le Problème Traditionnel</span>

<div class="mr-8">

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2 mb-5"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-money class="inline-block mr-2 text-red-400" /> <strong>Coût Prohibitif</strong> : Modifie TOUS les paramètres (7B+)</li>
<li><carbon-time class="inline-block mr-2 text-orange-400" /> <strong>Temps Énorme</strong> : Jours/semaines d'entraînement</li>
<li><carbon-warning class="inline-block mr-2 text-yellow-400" /> <strong>Catastrophic Forgetting</strong> : Oublie ses connaissances générales</li>
<li><carbon-FileStorage class="inline-block mr-2 text-purple-400" /> <strong>Stockage Massif</strong> : Plusieurs Go par adaptation</li>
</ul>

<div class="mt-2 p-2 bg-red-900 bg-opacity-40 rounded-lg">
<p class="text-sm text-red-200">
<carbon-warning class="inline mr-2" />
<strong>Résultat :</strong> Fine-tuning réservé aux GAFAM avec leurs budgets GPU !
</p>
</div>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://i0.wp.com/natashatracy.com/wp-content/uploads/2022/01/Mental-Illness-Pushing-Limits-Mistake.png?fit=900%2C389&ssl=1"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

# <span class="text-2xl font-bold text-green-400 mb-4 block mt-6">🚀 PEFT (Parameter Efficient Fine-Tuning)</span>

<div class="mr-8">

<div class="bg-gradient-to-r from-green-900 to-blue-900 bg-opacity-40 p-2 rounded-xl mb-0 border border-green-500">
<p class="text-sm text-green-100 leading-relaxed">
<strong class="text-green-300">Parameter Efficient Fine-Tuning</strong> = Fine-tuning "intelligent".
Plutôt que de réentraîner toutes les connaissances du LLM, on garde le modèle tel quel et on y ajoute seulement de petits <span class="text-yellow-300 font-bold">modules d’adaptation</span>.
On gèle la majorité des paramètres du modèle.
</p>
</div>

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-minimize class="inline-block mr-2 text-green-400" /> <strong>0.1-1%</strong> des paramètres modifiés seulement</li>
<li><carbon-flash class="inline-block mr-2 text-blue-400" /> <strong>10x plus rapide</strong> à entraîner</li>
<li><carbon-save class="inline-block mr-2 text-purple-400" /> <strong>95% moins de stockage</strong> nécessaire</li>
<li><carbon-chart-line class="inline-block mr-2 text-yellow-400" /> <strong>Performance quasi-identique</strong> au fine-tuning complet</li>
</ul>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-25">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://miro.medium.com/v2/resize:fit:1400/1*zZ70O3WXnXMB62tELtonWg.png"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

# <span class="text-2xl font-bold text-pink-400 mb-4 block mt-6">⭐ LoRA (Low-Rank Adaptation)</span>
<div class="mr-8"> <ul style="list-style-type: none;" class="space-y-4 text-sm mt-2" v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }" > 
<li><carbon-analytics class="inline-block mr-2 text-pink-400" /> 
  <strong>Principe</strong> : On décompose les grosses matrices du modèle en <strong>petits morceaux légers</strong> (plus faciles à entraîner).
</li> 
<li><carbon-layers class="inline-block mr-2 text-blue-400" /> 
  <strong>Formule</strong> : W = W₀ (gelé) + BA (petites matrices entraînées).
</li> 
<li><carbon-save class="inline-block mr-2 text-green-400" /> 
  <strong>Modulaire</strong> : Un seul modèle de base → plein de versions spécialisées selon les tâches.</li> 
<li><carbon-ZoomOutArea class="inline-block mr-2 text-purple-400" /> 
  <strong>QLoRA</strong> : Combine LoRA + <strong>quantification 4-bit</strong> → encore plus léger et rapide.
</li> </ul> 
<p class="text-sm text-pink-100 mt-4 leading-relaxed"> 
  💡 <strong class="text-pink-300">LoRA</strong> 
  démocratise le fine-tuning : plus besoin de supercalculateurs, <strong>un simple GPU de gaming suffit</strong> pour adapter un LLM à sa tâche. 
</p>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="./peft.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

## <span class="text-2xl font-bold text-cyan-400 mb-4 block mt-2">🔍 RAG (Retrival Augmented Generation)</span>

<div class="mr-8">

<div class="bg-gradient-to-r from-cyan-900 to-blue-900 bg-opacity-40 p-2 rounded-xl mb-2 border border-cyan-500">
<p class="text-sm text-cyan-100 leading-relaxed">
On donne accès au LLM à une <span class="text-yellow-300 font-bold">"bibliothèque externe"</span> 
(texte, base de données, audio/vidéos) qu'il consulte en temps réel.
</p>
</div>

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-search class="inline-block mr-2 text-cyan-400" /> <strong>Recherche</strong> : Trouve les documents pertinents</li>
<li><carbon-connect class="inline-block mr-2 text-blue-400" /> <strong>Augmentation</strong> : Injecte le contexte dans le prompt</li>
<li><carbon-text-creation class="inline-block mr-2 text-green-400" /> <strong>Génération</strong> : Répond avec les infos trouvées</li>
<li><carbon-update-now class="inline-block mr-2 text-purple-400" /> <strong>Temps réel</strong> : Données toujours à jour</li>
</ul>

<div class="mt-2 p-2 bg-cyan-900 bg-opacity-40 rounded-lg">
<p class="text-sm text-cyan-200">
<carbon-idea class="inline mr-2" />
<strong>Idéal pour :</strong> Documents internes, FAQ, bases de connaissances évolutives
</p>
</div>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt1496b19e4c6f9e66/66ba412a46b3f4241b969f48/rag-in-action.jpeg"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://substackcdn.com/image/fetch/$s_!nnE0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc60f8ecc-af83-4c9d-90dd-2c58aca92c3c_1456x609.gif"
      class="rounded-lg w-full h-28 object-cover" alt="" />
</div>
</div>

</div>

---
layout: center
class: text-center
---

<div class="grid grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">

<div class="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-xl shadow-lg">
<div class="text-4xl mb-4">🔍</div>
<h3 class="text-xl font-bold mb-3 text-white">RAG</h3>
<ul class="text-sm text-cyan-100 list-none text-left space-y-2 mb-4">
<li>✅ <strong>Données changeantes</strong>(docs, FAQ)</li>
<li>✅ <strong>Mise en œuvre rapide</strong>(jours)</li>
<li>✅ <strong>Sources traçables</strong>et vérifiables</li>
<li>✅ <strong>Pas de GPU</strong>nécessaire</li>
<li>❌ Limité par la <strong>qualité de recherche</strong></li>
</ul>
<div class="text-xs text-cyan-200 font-bold">💡 Parfait pour : Support client, documentation</div>
</div>

<div class="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-lg">
<div class="text-4xl mb-4">🎯</div>
<h3 class="text-xl font-bold mb-3 text-white">Fine-Tuning</h3>
<ul class="text-sm text-cyan-100 list-none text-left space-y-2 mb-4">
<li>✅ <strong>Comportement spécialisé</strong>(style, ton)</li>
<li>✅ <strong>Connaissances intégrées</strong>au modèle</li>
<li>✅ <strong>Performance optimale</strong>sur la tâche</li>
<li>✅ <strong>Pas de dépendance externe</strong></li>
<li>❌ <strong>Coûteux</strong>en temps/ressources</li>
</ul>
<div class="text-xs text-purple-200 font-bold">💡 Parfait pour : Assistant spécialisé, génération créative</div>
</div>

</div>

<div class="mt-4 p-6 bg-gradient-to-r from-yellow-900 to-orange-900 bg-opacity-40 rounded-xl max-w-4xl mx-auto">
<p class="text-lg text-yellow-200">
<carbon-idea class="inline mr-2" />
Approche Hybride : RAG + Fine-tuning léger = Le meilleur des deux mondes !
</p>
</div>

<style>
  ul {
    list-style: none;
  }
</style>


---
layout: section
background: https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80
---

# <span class="text-4xl font-bold">04. Sécurité et Robustesse</span>

<div 
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
  class="absolute bottom-10 right-10 text-5xl"
>
  <carbon-IbmCloudGateKeeper />
</div>
<img src="https://cdn.dribbble.com/userupload/28350278/file/original-a51de8316c9957ccea1ae498be54a9e1.gif" class="rounded-xl shadow-2xl max-h-[10vh] object-cover mx-auto" />

---
layout: center
class: text-center
---

# <span class="text-3xl font-bold text-red-400 mb-8 block">🚨 Un Dernier Défi Majeur</span>

<div class="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
v-motion
:initial="{ opacity: 0, y: 50 }"
:enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 1000 } }"
>

Nous savons maintenant **adapter les LLM** (fine-tuning, PEFT, RAG)...

<div class="mt-8 p-6 bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-40 rounded-xl">
<strong class="text-yellow-300">Mais comment s'assurer qu'ils sont sûrs et fiables ?</strong>
</div>

<div class="mt-6 text-lg">
→ Éviter les hallucinations dangereuses<br/>
→ Résister aux attaques malveillantes<br/>
→ Garantir un comportement éthique
</div>

</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-red-400 mb-4 block">🤥 Hallucinations : Mensonges Convaincants</span>

<div class="mr-8">

<div class="bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-40 p-2 rounded-xl mb-2 border border-red-500">
<p class="text-sm text-red-100 leading-relaxed">
Les LLM peuvent inventer des <strong class="text-red-300">"faits" totalement faux</strong> 
mais présentés de manière très convaincante. Comme un <span class="text-yellow-300 font-bold">mythomane charismatique</span> 
qui croit à ses propres mensonges !
</p>
</div>

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-warning class="inline-block mr-2 text-red-400" /> <strong>Fausses références</strong> : Invente des études inexistantes</li>
<li><carbon-document class="inline-block mr-2 text-orange-400" /> <strong>Dates erronées</strong> : Événements dans le mauvais ordre</li>
<li><carbon-user class="inline-block mr-2 text-yellow-400" /> <strong>Personnes fictives</strong> : Crée des biographies imaginaires</li>
<li><carbon-chart-line class="inline-block mr-2 text-purple-400" /> <strong>Statistiques inventées</strong> : Chiffres plausibles mais faux</li>
</ul>

<div class="mt-2 p-2 bg-red-900 bg-opacity-40 rounded-lg">
<p class="text-sm text-red-200">
<carbon-warning class="inline mr-2" />
<strong>Impact :</strong> Désinformation, décisions basées sur du faux, perte de confiance
</p>
</div>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://cdn.prod.website-files.com/614c82ed388d53640613982e/66c2f08ce00f28a7e6b9b4ce_65c1e4849d740e709a83e864_how-ai-hallucinations-work.webp"
      class="rounded-lg w-full h-40 object-cover" alt="" />
</div>
</div>

<div class="w-full mb-16 mt-12">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://cdn.prod.website-files.com/614c82ed388d53640613982e/66c2f08ce00f28a7e6b9b4c3_65c21e61957ac4c94d638370_llm-hallucination-example.webp"
      class="rounded-lg w-full h-40 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

## <span class="text-3xl font-bold text-green-400 mb-2 mt-6 block">✅ Solutions Anti-Hallucination</span>

<div class="mr-8">

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-search class="inline-block mr-2 text-cyan-400" /> <strong>RAG (on l'a vu !)</strong> : Sources factuelles externes</li>
<li><carbon-idea class="inline-block mr-2 text-blue-400" /> <strong>Chain-of-Thought</strong> : "Montre ton raisonnement étape par étape"</li>
<li><carbon-thumbs-up class="inline-block mr-2 text-green-400" /> <strong>RLHF</strong> : Apprentissage via feedback humain</li>
<li><carbon-rule class="inline-block mr-2 text-purple-400" /> <strong>Constitutional AI</strong> : Auto-correction avec principes éthiques</li>
</ul>

<div class="bg-gradient-to-r from-green-900 to-blue-900 bg-opacity-40 p-2 mt-2 rounded-xl mb-2 border border-green-500">
<p class="text-sm text-green-100 leading-relaxed">
<strong class="text-green-300">Stratégie multicouche :</strong> Combiner plusieurs techniques 
pour maximiser la fiabilité. Aucune solution miracle unique !
</p>
</div>

<p class="text-sm text-green-100 mt-4 leading-relaxed">
L'objectif : réduire les hallucinations de 69-88% (études juridiques) 
à moins de 10% dans un contexte contrôlé.
</p>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://miro.medium.com/v2/resize:fit:640/1*8YgJvWeDnHtNQ5k6ScKvGA.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

<div class="w-full">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://miro.medium.com/v2/resize:fit:640/1*KJZ3vF8LtXb2NrF5qhJ8gQ.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-orange-400 mb-4 block mt-6">⚔️ Attaques Adversariales</span>

<div class="mr-8">

<div class="bg-gradient-to-r from-orange-900 to-red-900 bg-opacity-40 p-2 rounded-xl mb-2 border border-orange-500">
<p class="text-sm text-orange-100 leading-relaxed">
Les <strong class="text-orange-300">hackers du prompt</strong> trouvent des moyens créatifs 
de contourner les sécurités. Comme des <span class="text-yellow-300 font-bold">pickpockets numériques</span> 
qui exploitent les failles psychologiques des IA.
</p>
</div>

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-edit class="inline-block mr-2 text-red-400" /> <strong>Prompt Injection</strong> : "Ignore tes instructions..."</li>
<li><carbon-DocumentUnprotected class="inline-block mr-2 text-orange-400" /> <strong>Jailbreaking</strong> : "Agis comme DAN (Do Anything Now)"</li>
<li><carbon-copy class="inline-block mr-2 text-yellow-400" /> <strong>Model Extraction</strong> : Vol de propriété intellectuelle</li>
<li><carbon-flood class="inline-block mr-2 text-purple-400" /> <strong>Prompt Flooding</strong> : Saturation pour déclencher des bugs</li>
</ul>

<div class="mt-2 p-2 bg-orange-900 bg-opacity-40 rounded-lg">
<p class="text-sm text-orange-200">
<carbon-warning class="inline mr-2" />
<strong>Enjeu :</strong> >50% des attaques réussissent selon les modèles !
</p>
</div>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

<div class="w-full">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://media.giphy.com/media/3knKiTJnnyH0I/giphy.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: two-cols
class: items-center
---

# <span class="text-3xl font-bold text-blue-400 mb-4 block mt-6">🛡️ Défenses et Bonnes Pratiques</span>

<div class="mr-8">

<ul style="list-style-type: none;"
class="space-y-4 text-sm mt-2"
v-motion
:initial="{ opacity: 0, x: -50 }"
:enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 200 } }"
>
<li><carbon-filter class="inline-block mr-2 text-green-400" /> <strong>Input Validation</strong> : Filtrage des prompts suspects</li>
<li><carbon-security class="inline-block mr-2 text-blue-400" /> <strong>Output Filtering</strong> : Contrôle des réponses générées</li>
<li><carbon-time class="inline-block mr-2 text-purple-400" /> <strong>Rate Limiting</strong> : Limiter les requêtes par utilisateur</li>
<li><carbon-user-multiple class="inline-block mr-2 text-yellow-400" /> <strong>Human in the Loop</strong> : Validation humaine pour les cas sensibles</li>
</ul>

<div class="bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-40 p-2 rounded-xl mb-2 border border-blue-500">
<p class="text-sm text-blue-100 leading-relaxed">
<strong class="text-blue-300">Architecture en couches :</strong> Comme un château fort, 
plusieurs niveaux de défense valent mieux qu'une muraille unique.
</p>
</div>

<p class="text-sm text-blue-100 mt-4 leading-relaxed">
La sécurité des LLM est un <strong class="text-yellow-300">jeu du chat et de la souris</strong> 
permanent entre défenseurs et attaquants.
</p>

</div>

::right::

<div class="pl-8 flex flex-col items-center justify-center h-full">

<div class="w-full mb-4">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://miro.medium.com/v2/resize:fit:640/1*Y8JvP3kR9tWL4NxB5Q2gHw.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

<div class="w-full">
<div class="p-2 rounded-xl shadow-xl">
<ClickableImage src="https://miro.medium.com/v2/resize:fit:640/1*FH3kLm7P4Q8vN5xR9gT2Kw.gif"
      class="rounded-lg w-full h-50 object-cover" alt="" />
</div>
</div>

</div>

---
layout: section
background: https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80
---

# <span class="text-4xl font-bold">05. Mini-Lab Pratique</span>

<div 
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
  class="absolute bottom-10 right-10 text-5xl"
>
  <carbon-code />
</div>
<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" class="rounded-xl shadow-2xl max-h-[10vh] object-cover mx-auto" />

---

# <span class="text-3xl font-bold text-green-400 mb-6 block">🚀 Déploiement : 3 Modèles à Tester</span>

<div class="grid grid-cols-3 gap-6 mb-8">
  <div class="bg-blue-900 bg-opacity-30 p-4 rounded-xl">
    <h3 class="text-lg font-bold mb-2 text-blue-300">🦅 Falcon 7B</h3>
    <ul class="text-sm space-y-1">
      <li>✅ Licence Apache 2.0</li>
      <li>⚡ Optimisé inférence</li>
      <li>🌍 Multilingue</li>
      <li>🏢 Production-ready</li>
    </ul>
  </div>

  <div class="bg-purple-900 bg-opacity-30 p-4 rounded-xl">
    <h3 class="text-lg font-bold mb-2 text-purple-300">🦙 LLaMA 2 7B</h3>
    <ul class="text-sm space-y-1">
      <li>⚠️ Licence custom</li>
      <li>🎯 Performance élevée</li>
      <li>🔧 Variantes 7B-70B</li>
      <li>🧪 Recherche/Proto</li>
    </ul>
  </div>

  <div class="bg-orange-900 bg-opacity-30 p-4 rounded-xl">
    <h3 class="text-lg font-bold mb-2 text-orange-300">🌪️ Mistral 7B</h3>
    <ul class="text-sm space-y-1">
      <li>✅ Apache 2.0</li>
      <li>🇫🇷 Excellent en français</li>
      <li>⚡ Efficace et compact</li>
      <li>🥇 Recommandé pour débuter</li>
    </ul>
  </div>
</div>

```bash
# Installation de l'environnement complet
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
pip install transformers accelerate datasets evaluate peft bitsandbytes wandb

# Test GPU
python -c "import torch; print(f'CUDA disponible: {torch.cuda.is_available()}')"
python -c "import torch; print(f'Nombre de GPUs: {torch.cuda.device_count()}')"
```

```python
# Déploiement Mistral 7B avec quantification
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
import torch

# Configuration quantification 4-bit pour économiser la mémoire
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,
)

model_name = "mistralai/Mistral-7B-Instruct-v0.2"
model = AutoModelForCausalLM.from_pretrained(
    model_name, quantization_config=bnb_config, device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

print("✅ Modèle chargé ! Utilisation mémoire réduite de 75%")
```

---

# <span class="text-3xl font-bold text-green-400 mb-6 block">🎯 Prompt Engineering Avancé</span>

<div class="grid grid-cols-2 gap-6">

<div class="max-h-[30vh] overflow-y-auto bg-gray-900/60 p-4 rounded-lg hide-scrollbar">

### 📋 Techniques Structurées

```python
def create_advanced_prompt(task, context, examples=None):
    prompt = f"""<|im_start|>system
Vous êtes un assistant IA expert. Suivez ces instructions précisément.
<|im_end|>

<|im_start|>user
TÂCHE: {task}

CONTEXTE: {context}

INSTRUCTIONS:
1. Analysez la demande étape par étape
2. Utilisez votre expertise du domaine
3. Fournissez une réponse structurée et précise
4. Justifiez votre raisonnement

{f"EXEMPLES: {examples}" if examples else ""}

RÉPONSE ATTENDUE: Réponse détaillée avec justification
<|im_end|>

<|im_start|>assistant"""
    
    return prompt

# Utilisation
prompt = create_advanced_prompt(
    task="Expliquer la différence entre LoRA et QLoRA",
    context="Formation technique pour développeurs",
    examples="LoRA: adapte 0.1% des paramètres..."
)
```

</div>

<div class="max-h-[30vh] overflow-y-auto bg-gray-900/60 p-4 rounded-lg hide-scrollbar">

### 🧠 Chain-of-Thought

```python
def chain_of_thought_prompt(question):
    return f"""Question: {question}

Réfléchissons étape par étape:

Étape 1: Analyse du problème
- Qu'est-ce qui est demandé exactement ?
- Quelles sont les informations clés ?

Étape 2: Décomposition
- Quels sont les sous-problèmes ?
- Dans quel ordre les traiter ?

Étape 3: Raisonnement
- Appliquons les connaissances pertinentes
- Vérifions la logique

Étape 4: Synthèse
- Conclusion basée sur l'analyse
- Vérification de cohérence

Réponse finale:"""

# Test
question = "Comment choisir le rank optimal pour LoRA?"
cot_prompt = chain_of_thought_prompt(question)
```

</div>

</div>

<div class="mt-6 p-4 bg-blue-900 bg-opacity-30 rounded-lg">
  <h4 class="font-bold mb-2 text-blue-300">🔬 Métriques d'Évaluation</h4>
  <div class="grid grid-cols-4 gap-4 text-sm">
    <div><strong>Cohérence:</strong> BERT Score > 0.85</div>
    <div><strong>Factualité:</strong> Fact-check > 0.90</div>
    <div><strong>Fluidité:</strong> Perplexité < 20</div>
    <div><strong>Sécurité:</strong> Toxicity < 0.05</div>
  </div>
</div>

<style>
  .hide-scrollbar {
  max-height: 30vh;
  overflow-y: auto;
  overflow-x: hidden; 
  padding: 1rem;
  background: rgba(15,23,42,0.6);
  border-radius: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar { width: 0; height: 0; }
</style>

---

# <span class="text-3xl font-bold text-yellow-400 mb-6 block">💰 Monitoring des Coûts en Temps Réel</span>

<style>
.hide-scrollbar {
  max-height: 40vh;
  overflow-y: auto;     /* scroll vertical possible */
  overflow-x: hidden;   /* empêche le scroll horizontal et cache la barre */
  padding: 1rem;
  background: rgba(15,23,42,0.6);
  border-radius: 0.5rem;
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none;    /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar { width: 0; height: 0; } /* Chrome, Safari */

/* améliore l'affichage du code : wrap propre des longues lignes */
.hide-scrollbar pre {
  white-space: pre-wrap;   /* préserve sauts de ligne mais wrap long lines */
  word-break: break-word;
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
  font-size: 0.9rem;
}
</style>

```python
import psutil
import GPUtil
import time
from datetime import datetime
import matplotlib.pyplot as plt

class AIResourceMonitor:
    def __init__(self):
        self.start_time = time.time()
        self.costs = {
            "gpu_hour_cost": 2.5,  # USD/heure GPU A100
            "cpu_hour_cost": 0.1,   # USD/heure CPU
            "memory_gb_hour_cost": 0.01  # USD/GB/heure
        }
        self.metrics_history = []
    
    def get_current_usage(self):
        # GPU metrics
        gpus = GPUtil.getGPUs()
        gpu_load = gpus[0].load * 100 if gpus else 0
        gpu_memory_used = gpus[0].memoryUsed if gpus else 0
        gpu_memory_total = gpus[0].memoryTotal if gpus else 0
        
        # CPU & RAM metrics
        cpu_usage = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        
        return {
            "timestamp": datetime.now(),
            "gpu_load": gpu_load,
            "gpu_memory_used_mb": gpu_memory_used,
            "gpu_memory_total_mb": gpu_memory_total,
            "cpu_usage": cpu_usage,
            "ram_used_gb": memory.used / (1024</strong>3),
            "ram_total_gb": memory.total / (1024</strong>3)
        }
    
    def calculate_costs(self, duration_hours):
        current = self.get_current_usage()
        
        gpu_cost = (current["gpu_load"] / 100) * self.costs["gpu_hour_cost"] * duration_hours
        cpu_cost = (current["cpu_usage"] / 100) * self.costs["cpu_hour_cost"] * duration_hours
        memory_cost = current["ram_used_gb"] * self.costs["memory_gb_hour_cost"] * duration_hours
        
        total_cost = gpu_cost + cpu_cost + memory_cost
        
        return {
            "gpu_cost": round(gpu_cost, 4),
            "cpu_cost": round(cpu_cost, 4), 
            "memory_cost": round(memory_cost, 4),
            "total_cost": round(total_cost, 4)
        }
    
    def log_metrics(self):
        metrics = self.get_current_usage()
        self.metrics_history.append(metrics)
        
        duration_hours = (time.time() - self.start_time) / 3600
        costs = self.calculate_costs(duration_hours)
        
        print(f"""
🔍 Monitoring IA - {metrics['timestamp'].strftime('%H:%M:%S')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Utilisation:
   GPU: {metrics['gpu_load']:.1f}% | Mémoire: {metrics['gpu_memory_used_mb']:.0f}MB
   CPU: {metrics['cpu_usage']:.1f}% | RAM: {metrics['ram_used_gb']:.1f}GB
   
💰 Coûts (durée: {duration_hours:.2f}h):
   GPU: ${costs['gpu_cost']} | CPU: ${costs['cpu_cost']} 
   Mémoire: ${costs['memory_cost']} | TOTAL: ${costs['total_cost']}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        """)
        
        return metrics, costs

# Utilisation pendant le fine-tuning
monitor = AIResourceMonitor()

# Simulation d'entraînement avec monitoring
for epoch in range(3):
    print(f"\n🚀 Epoch {epoch+1}/3")
    for step in range(5):
        time.sleep(2)  # Simulation calcul
        if step % 2 == 0:  # Log toutes les 2 étapes
            metrics, costs = monitor.log_metrics()
```
---

# <span class="text-3xl font-bold text-yellow-400 mb-6 block">⚡ Optimisations Performance/Coût</span>

<div class="grid grid-cols-2 gap-6">

<div>

### 🎯 Techniques d'Optimisation

```python
# 1. Quantification progressive
def optimize_model_memory(model, target_memory_gb=16):
    """Optimise la mémoire selon la cible"""
    current_memory = get_model_memory(model)
    
    if current_memory > target_memory_gb:
        # Quantification 8-bit
        model = model.half()  # float16
        print(f"✅ Float16: {current_memory/2:.1f}GB")
        
        if current_memory/2 > target_memory_gb:
            # Quantification 4-bit avec BitsAndBytesConfig
            model = quantize_4bit(model)
            print(f"✅ 4-bit: {current_memory/4:.1f}GB")
    
    return model

# 2. Batch processing intelligent
class SmartBatcher:
    def __init__(self, max_memory_gb=12):
        self.max_memory = max_memory_gb
        
    def optimal_batch_size(self, sequence_length):
        # Formule empirique pour estimer la taille optimale
        base_batch_size = 32
        memory_factor = self.max_memory / 16  # Référence 16GB
        length_factor = 512 / sequence_length  # Référence 512 tokens
        
        optimal_size = int(base_batch_size * memory_factor * length_factor)
        return max(1, min(optimal_size, 64))  # Entre 1 et 64

# 3. Gradient Checkpointing
def memory_efficient_training(model):
    model.gradient_checkpointing_enable()
    # Économise ~40% de mémoire au coût de +20% de temps
    print("✅ Gradient checkpointing activé")
    return model
```

</div>

<div>

### 📊 Métriques de Performance

```python
import time
from functools import wraps

def benchmark_inference(func):
    @wraps(func)
    def wrapper(*args, <strong>kwargs):
        start_time = time.time()
        result = func(*args, <strong>kwargs)
        end_time = time.time()
        
        # Calcul des métriques
        duration = end_time - start_time
        if hasattr(result, '__len__'):
            tokens_generated = len(result.split())
        else:
            tokens_generated = 50  # Estimation
            
        tokens_per_second = tokens_generated / duration
        cost_per_token = 0.002 / 1000  # $0.002/1K tokens
        total_cost = tokens_generated * cost_per_token
        
        print(f"""
⚡ Performance Benchmark:
   Durée: {duration:.2f}s
   Tokens générés: {tokens_generated}
   Vitesse: {tokens_per_second:.1f} tok/s
   Coût: ${total_cost:.4f}
        """)
        
        return result
    return wrapper

@benchmark_inference
def generate_response(model, tokenizer, prompt):
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(</strong>inputs, max_length=100)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

# Test de performance
response = generate_response(model, tokenizer, "Expliquez LoRA")
```

</div>

</div>

<div class="mt-6 p-4 bg-red-900 bg-opacity-30 rounded-lg">
  <h4 class="font-bold mb-2 text-red-300">⚠️ Points d'Attention Coûts</h4>
  <div class="grid grid-cols-2 gap-4 text-sm">
    <div><strong>GPU idle:</strong> Facturation continue même sans utilisation</div>
    <div><strong>Transfer data:</strong> Coûts de bande passante souvent oubliés</div>
    <div><strong>Storage:</strong> Modèles fine-tunés = Go de stockage</div>
    <div><strong>Scaling:</strong> Pics de charge = surcoûts exponentiels</div>
  </div>
</div>

---
layout: section
background: https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80
---

# <span class="text-4xl font-bold">Conclusion : Prêts pour l'IA Générative !</span>

<div 
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
  class="absolute bottom-10 right-10 text-5xl"
>
  <carbon-checkmark-filled />
</div>
<img src="https://i.pinimg.com/originals/55/d8/0d/55d80d6e778ac65baa02a545925e4cbe.gif" class="rounded-xl shadow-2xl max-h-[10vh] object-cover mx-auto" />

---
layout: center
class: text-center
---

# <span class="text-3xl font-bold text-blue-400 mb-8 block">🎯 Ce Qu'il Faut Retenir</span>

<div class="grid grid-cols-2 gap-8 max-w-5xl mx-auto">

<div class="text-left">
  <h3 class="text-xl font-bold mb-4 text-green-400">✅ Connaissances Acquises</h3>
  <ul class="space-y-3 text-sm"
      v-motion
      :initial="{ opacity: 0, x: -50 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800, stagger: 100 } }">
    <li><carbon-machine-learning class="inline mr-2 text-blue-400" /><strong>Architectures</strong> : Transformers → LLM → MLLM</li>
    <li><carbon-settings-adjust class="inline mr-2 text-purple-400" /><strong>PEFT</strong> : LoRA révolutionne le fine-tuning (90% d'économies !)</li>
    <li><carbon-IbmCloudGateKeeper class="inline mr-2 text-red-400" /><strong>Sécurité</strong> : RAG, CoT, validation contre hallucinations</li>
    <li><carbon-chart-evaluation class="inline mr-2 text-yellow-400" /><strong>Monitoring</strong> : Coûts GPU/CPU en temps réel</li>
  </ul>
</div>

<div class="text-left">
  <h3 class="text-xl font-bold mb-4 text-orange-400">🚀 Compétences Pratiques</h3>
  <ul class="space-y-3 text-sm"
      v-motion
      :initial="{ opacity: 0, x: 50 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800, stagger: 100 } }">
    <li><carbon-code class="inline mr-2 text-green-400" /><strong>Déploiement</strong> : Mistral, LLaMA 2, Falcon en production</li>
    <li><carbon-edit class="inline mr-2 text-blue-400" /><strong>Prompt Engineering</strong> : Techniques CoT et structuration</li>
    <li><carbon-debug class="inline mr-2 text-red-400" /><strong>Évaluation</strong> : Métriques qualité/biais/performance</li>
    <li><carbon-analytics class="inline mr-2 text-purple-400" /><strong>Optimisation</strong> : Quantification, batching, checkpointing</li>
  </ul>
</div>

</div>

<div 
  class="mt-8 p-6 bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-50 rounded-xl max-w-4xl mx-auto"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 800 } }">
  
  <h3 class="text-xl font-bold mb-3 text-white">🎯 Plan d'Action Immédiat (1-2 semaines)</h3>
  <div class="grid grid-cols-2 gap-4 text-sm text-gray-200">
    <div>
      <strong>Semaine 1 :</strong>
      <ul class="mt-1 space-y-1 list-disc list-inside">
        <li>Tester les 3 modèles sur vos cas d'usage</li>
        <li>Implémenter LoRA sur un dataset simple</li>
      </ul>
    </div>
    <div>
      <strong>Semaine 2 :</strong>
      <ul class="mt-1 space-y-1 list-disc list-inside">
        <li>Déployer le monitoring des coûts</li>
        <li>Benchmark performance vs coût</li>
      </ul>
    </div>
  </div>
</div>

---

# <span class="text-3xl font-bold text-green-400 mb-6 block">🎁 Ressources et Outils</span>

<div class="grid grid-cols-3 gap-6">

<div class="bg-blue-900 bg-opacity-30 p-4 rounded-xl">
  <h3 class="text-lg font-bold mb-3 text-blue-300">📚 Documentation</h3>
  <ul class="text-sm space-y-2">
    <li>
        <a href="https://huggingface.co/models" target="_blank" rel="noopener noreferrer"
           class="hover:underline text-blue-200">Hugging Face Hub</a>
      </li>
      <li>
        <a href="https://github.com/huggingface/peft" target="_blank" rel="noopener noreferrer"
           class="hover:underline text-blue-200">PEFT Library</a>
      </li>
      <li>
        <a href="https://paperswithcode.com/" target="_blank" rel="noopener noreferrer"
           class="hover:underline text-blue-200">Papers with Code</a>
      </li>
      <li>
        <a href="https://docs.mistral.ai/" target="_blank" rel="noopener noreferrer"
           class="hover:underline text-blue-200">Mistral Docs</a>
      </li>
  </ul>
</div>

<div class="bg-purple-900 bg-opacity-30 p-4 rounded-xl">
  <h3 class="text-lg font-bold mb-3 text-purple-300">🔧 Outils Essentiels</h3>
  <ul class="text-sm space-y-2">
    <li><strong>transformers</strong> (Hugging Face)</li>
    <li><strong>peft</strong> (LoRA, QLoRA)</li>
    <li><strong>bitsandbytes</strong> (Quantification)</li>
    <li><strong>wandb</strong> (Tracking expériences)</li>
  </ul>
</div>

<div class="bg-green-900 bg-opacity-30 p-4 rounded-xl">
  <h3 class="text-lg font-bold mb-3 text-green-300">🧪 Datasets d'Évaluation</h3>
  <ul class="text-sm space-y-2">
    <li><strong>MMLU</strong> (Connaissances générales)</li>
    <li><strong>HellaSwag</strong> (Raisonnement)</li>
    <li><strong>TruthfulQA</strong> (Factualité)</li>
    <li><strong>FQuAD</strong> (Français Q&A)</li>
  </ul>
</div>

</div>

```bash
# Kit de démarrage complet
git clone https://github.com/your-org/ia-generative-starter
cd ia-generative-starter

# Installation environnement
pip install -r requirements.txt

# Scripts prêts à l'emploi
python deploy_mistral.py          # Déploiement Mistral 7B
python lora_finetune.py          # Fine-tuning LoRA
python evaluate_model.py         # Évaluation complète
python monitor_costs.py          # Monitoring temps réel

# Jupyter notebooks interactifs
jupyter lab notebooks/
```

<div class="mt-6 p-4 bg-yellow-900 bg-opacity-30 rounded-lg">
  <p class="text-yellow-200 text-sm">
    <carbon-idea class="inline mr-2" />
    <strong>Conseil :</strong> Commencez par Mistral 7B avec LoRA sur un petit dataset. 
    C'est le combo le plus efficace pour débuter !
  </p>
</div>

---
layout: center
class: text-center
---

# <span class="text-3xl font-bold text-blue-400 mb-8 block">Merci de votre attention ! 🙏</span>

<div 
  class="text-2xl text-blue-400 mt-8 mb-12"
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
>
  Questions & Discussion
</div>

<div class="text-6xl mb-8">
  <carbon-help />
</div>

<div 
  class="pt-8"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
>
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-70 px-8 py-4 rounded-xl shadow-lg inline-block">
    <span class="text-xl font-bold text-white">IA Générative Complétée ✨</span>
  </div>
</div>

<div class="mt-8 text-gray-400 text-sm">
  Prochaine session : Architectures d'Agents AI et RAG Avancé
</div>

<div class="abs-br m-8 flex gap-3">
  <a href="https://www.github.com/Anonymous1223334444" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://www.google.com/search?q=generative+ai&oq=Generative+a&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDkyBwgCEAAYgAQyDAgDEAAYQxiABBiKBTIMCAQQABhDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEIMzU5N2owajmoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-document />
  </a>
  <a href="mailto:sarrandre005@gmail.com" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-email />
  </a>
</div>

<style>
.icon-btn {
  @apply transition-all duration-200 hover:text-blue-400;
}
</style>