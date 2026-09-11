# Conceito & Experiência — Landing Page de Inteligência Emocional

> Documento de estratégia antes do desenvolvimento. Nenhuma linha de código ainda — isso é fundação.

---

## 1. Três conceitos de nome

### A) **Presença**
Direto, uma palavra só, é literalmente o tema central. Fácil de lembrar, fácil de posicionar como marca ("Presença — inteligência emocional para viver o agora").

### B) **O Espaço Entre**
Mais poético. Referência ao intervalo entre estímulo e resposta — o lugar exato onde a escolha consciente acontece. Menos óbvio, mais memorável, soa como algo que desperta curiosidade antes mesmo de explicar do que se trata.

### C) **Agora.**
Minimalista ao extremo — uma palavra e um ponto final. O ponto final reforça a ideia de "isso já é suficiente, não precisa de mais nada além do presente". Ótimo para uma marca que aposta tudo na tipografia e no espaço em branco.

**Minha recomendação:** *Presença* como nome principal, com *"o espaço entre estímulo e resposta"* como frase-conceito recorrente dentro do site (não como nome, mas como fio condutor do texto).

---

## 2. Três propostas de identidade visual

### Proposta A — *Aurora Neural*
Gradientes suaves de amanhecer (lavanda, pêssego, índigo profundo), formas orgânicas fluidas evocando conexões neurais ao mesmo tempo em que lembram um nascer do sol. Tipografia: serifada elegante nos títulos (humaniza), sans-serif limpa no corpo. Sensação: despertar, esperança, delicadeza.

### Proposta B — *Respiração*
Minimalista, muito espaço em branco, tons terrosos e quentes (verde-sálvia, areia, carvão). Elementos visuais respiram literalmente — círculos que expandem e contraem lentamente. Tipografia: geométrica sans-serif, entrelinhas generosas que imitam o ritmo de uma respiração calma. Sensação: quietude, solo firme, humano.

### Proposta C — *Constelação Humana*
Fundo azul-meia-noite profundo com traços delicados de linhas conectando pontos de luz suave (rede neural abstraída como céu estrelado, não como robô). Acentos em dourado quente e ameixa. Tipografia sans-serif elegante com tracking largo nos títulos. Sensação: contemplação, profundidade, introspecção noturna.

**Minha recomendação:** combinar B como base (a maior parte do scroll) com C reservada só para a seção de neurociência — criando um contraste de ritmo natural, como um "momento de foco mais profundo" no meio da experiência.

---

## 3. Estrutura completa da landing page

1. **Hero** — frase de impacto + micro-interação sutil (respiração visual de fundo)
2. **Manifesto** — o conceito central em poucas frases, ritmo pausado, uma frase por "respiro" de scroll
3. **O Framework** — Perceber → Compreender → Respirar → Escolher, apresentado como jornada visual (scroll-driven)
4. **Experiência interativa** — o cenário da reunião (Reagir / Evitar / Perceber)
5. **A ciência por trás** (seção visualmente distinta, mais contida) — 3-4 conceitos de neurociência explicados de forma simples
6. **Nota sobre fontes** — transparência de que os conceitos vêm de literatura científica, com referências
7. **Sobre o projeto** (contexto de portfólio) — stack técnica, decisões de design, link pro processo/case study
8. **Fechamento** — retorno à frase-manifesto, call-to-action leve (ex: "explorar o repositório" ou "ver o processo")

---

## 4. Ideias para a experiência interativa

- **Cenário da reunião** como três abas ou cards clicáveis (Reagir / Evitar / Perceber), cada um revelando uma pequena narrativa + o que acontece no cérebro nesse caminho, sem julgar nenhuma opção como "errada".
- **Mini-exercício de respiração incorporado**: um círculo que expande e contrai em ritmo de respiração guiada (4s inspira / 4s expira), convidando a pessoa a experimentar por alguns segundos — transforma leitura passiva em vivência.
- **Barra de progresso do framework**: conforme o usuário rola a página, uma linha fina vai se preenchendo mostrando em qual etapa (Perceber/Compreender/Respirar/Escolher) ele está.
- **Relógio "agora" discreto**: um timestamp ao vivo em algum canto sutil, reforçando sem dizer explicitamente que "isso é literalmente o presente".

---

## 5. Sugestões de frases para o Hero

- *"O futuro ainda não aconteceu. O passado já passou. A vida acontece aqui."* (frase-manifesto principal)
- *"Viver o agora também é uma forma de inteligência."*
- *"Antes de reagir, perceba."*
- *"Sentir para entender. Entender para escolher."*
- *"O agora é o único lugar onde a mudança acontece."*
- *"Entre o que sentimos e o que fazemos, existe um espaço — e nesse espaço mora a escolha."*

---

## 6. Paleta de cores por proposta

**A) Aurora Neural**
| Uso | Cor |
|---|---|
| Fundo | `#FAF6F1` |
| Primária | `#4B4E9E` |
| Acento | `#F2A488` |
| Secundária | `#8FA98C` |
| Texto | `#2B2B2B` |

**B) Respiração**
| Uso | Cor |
|---|---|
| Fundo | `#F1ECE3` |
| Primária | `#6B8E7F` |
| Acento | `#C97B5A` |
| Texto | `#23221E` |
| Neutro | `#B7AFA3` |

**C) Constelação Humana**
| Uso | Cor |
|---|---|
| Fundo | `#10162B` |
| Primária/glow | `#E8C77E` |
| Acento | `#5D3E75` |
| Secundária | `#3E7C82` |
| Texto | `#F5F1EA` |

---

## 7. Ideias de animações sutis

- Fade + leve deslocamento vertical no scroll (staggered, uma palavra/bloco de cada vez)
- Pulsação lenta (scale 1 → 1.05 → 1, 4-6s, easing suave) em elementos de "respiração"
- Parallax muito discreto ao mover o cursor sobre ilustrações de rede neural (amplitude baixíssima)
- Linha de progresso que se preenche conforme o scroll acompanha o framework
- Transições de 300-600ms com easing suave (ease-in-out) em todos os microinterações dos botões — nunca springy/bounce, isso quebraria o tom contemplativo
- Respeitar `prefers-reduced-motion` — além de acessibilidade, reforça a filosofia do próprio projeto (dar ao usuário controle sobre sua própria experiência)

---

## 8. Como trazer neurociência sem pesar

- Frases curtas (2-3 linhas no máximo) por conceito, nunca parágrafos longos
- Sempre começar pela experiência cotidiana ("Você já sentiu o coração acelerar antes de falar em público?") antes de nomear o mecanismo neurológico
- Metáforas visuais simples em vez de diagramas técnicos rotulados
- Divulgação progressiva: texto curto visível + "saiba mais" expansível pra quem quer se aprofundar
- Fontes citadas de forma discreta (nota de rodapé/link), sem interromper o fluxo de leitura
- Nunca usar termo técnico sem uma "tradução" imediata em linguagem comum

---

## 9. O que faz esse projeto se destacar em portfólio

- Mostra **raciocínio de UX**, não só estética — o cenário interativo prova que você pensa em jornada do usuário, não só em CSS
- Demonstra **maturidade de conteúdo**: a escrita cuidadosa (tom não-alarmista, não-clichê) é uma habilidade rara e valorizada em times reais
- Evidencia **acessibilidade real** (reduced-motion, semântica, ARIA no componente interativo) — sinaliza rigor técnico
- Evidencia **performance consciente** (otimização de imagem no Next.js, lazy loading de ilustrações)
- Um **case study documentado** junto ao site ao vivo (por que essas decisões, o que foi testado, o que mudaria) eleva o projeto de "bonito" para "profissional"

---

## 10. Proposta final recomendada

**Nome:** Presença
**Base visual:** Proposta B (Respiração) para a maior parte da jornada — calma, humana, terrosa
**Contraste:** Proposta C (Constelação Humana) isolada na seção "A ciência por trás", criando uma pausa visual mais contemplativa exatamente no momento em que se pede mais atenção do leitor
**Framework central:** Perceber → Compreender → Respirar → Escolher, como fio condutor visual do scroll
**Interação-chave:** o cenário da reunião + mini-respiração guiada

Essa combinação entrega uma experiência que respira, literalmente, no ritmo da própria mensagem — sem nunca recair em clichê de "IA" ou em academicismo pesado.
