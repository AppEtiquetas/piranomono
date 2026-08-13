import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.asset.json";
import logoImg from "../assets/20260715_091651_0000.png";
import { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { 
  MapPin, 
  Settings2, 
  Search, 
  Layers, 
  HelpCircle, 
  Zap,
  Menu,
  X
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    whatsapp: "",
    email: "",
    type: "Produto para teste",
    message: ""
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0.5, 0.9]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);
  const headerBorderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Piranomono!
Tenho uma proposta de parceria:

Nome: ${formData.name}
Empresa: ${formData.brand}
WhatsApp: ${formData.whatsapp}
E-mail: ${formData.email}
Tipo de Parceria: ${formData.type}
Mensagem: ${formData.message}`;
    window.open(`https://wa.me/5519971356350?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Header */}
      <motion.header 
        style={{ 
          backgroundColor: useTransform(headerBgOpacity, o => `rgba(11, 11, 11, ${o})`),
          backdropFilter: useTransform(headerBlur, b => `blur(${b}px)`),
          borderBottomColor: useTransform(headerBorderOpacity, o => `rgba(255, 255, 255, ${o * 0.1})`)
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      >
        <nav className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
          <img src={logoImg} alt="Piranomono Logo" className="h-8 md:h-10 w-auto hover:scale-105 transition-transform cursor-pointer" />          
          <div className="hidden md:flex gap-8 font-bold uppercase text-[10px] lg:text-xs tracking-[0.25em]">
            <a href="#conteudos" className="hover:text-primary transition-colors">Conteúdos</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#parcerias" className="hover:text-primary transition-colors">Parcerias</a>
            <a href="#duvidas" className="hover:text-primary transition-colors">Dúvidas</a>
          </div>

          <div className="flex items-center gap-4">
            <ShinyButton
              onClick={() => window.open("https://www.instagram.com/piranomono/", "_blank")}
              className="hidden sm:block px-6 md:px-8 py-2 md:py-2.5 text-[10px] md:text-xs"
            >
              ACOMPANHAR
            </ShinyButton>
            
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            className="absolute top-20 left-0 right-0 bg-background border-b border-white/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-bold uppercase text-xs tracking-[0.25em]">
              <a href="#conteudos" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Conteúdos</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Sobre</a>
              <a href="#parcerias" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Parcerias</a>
              <a href="#duvidas" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Dúvidas</a>
              <ShinyButton
                onClick={() => {
                  window.open("https://www.instagram.com/piranomono/", "_blank");
                  setIsMenuOpen(false);
                }}
                className="w-full py-4"
              >
                ACOMPANHAR
              </ShinyButton>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      <main>
        {/* Hero */}
        <section className="relative container mx-auto px-4 pt-48 pb-32 flex flex-col items-center text-center overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-black tracking-[0.35em] uppercase mb-6 text-xs"
          >
            Mobilidade Elétrica na Prática
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black mb-8 uppercase leading-[0.9] sm:leading-[0.85] tracking-tight text-balance"
          >
            Uma Roda.<br />Uma Cidade.<br /><span className="text-primary">Uma Nova Forma</span><br className="hidden sm:block" /> de se Mover.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Acompanhe a Piranomono pelas ruas de Piracicaba explorando monociclos, patinetes, motos elétricas e a nova mobilidade urbana do jeito que ela realmente acontece: na prática.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={() => window.open("https://www.instagram.com/piranomono/", "_blank")}
              className="bg-primary text-primary-foreground px-8 sm:px-12 py-5 sm:py-6 rounded-full font-black text-base sm:text-lg hover:bg-primary/90 transition-all uppercase shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              ACOMPANHAR OS ROLÊS
            </button>
            <a href="#parcerias" className="group border-2 border-primary/30 text-primary px-8 sm:px-12 py-5 sm:py-6 rounded-full font-black text-base sm:text-lg hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center hover:scale-105 active:scale-95 w-full sm:w-auto">
              QUERO FAZER UMA PARCERIA
            </a>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs text-muted-foreground tracking-[0.55em] font-black uppercase opacity-50"
          >
            Liberdade sobre uma roda.
          </motion.p>
        </section>

        <section id="manifesto" className="bg-secondary/30 py-32 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-black uppercase mb-12 tracking-tight leading-[1] md:leading-[0.9]">Não é só sobre chegar.<br/>É sobre como você chega.</h2>
            <div className="space-y-6 sm:space-y-10 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed font-medium">
              <p>A mobilidade elétrica está mudando a maneira como a gente ocupa a cidade. Mas ficha técnica não conta a história inteira.</p>
              <p>Como é usar um monociclo na rua? É difícil aprender? Como ele se comporta no dia a dia? A Piranomono nasceu para descobrir essas respostas colocando os equipamentos na rua.</p>
            </div>
            <div className="inline-block border-t border-primary/50 pt-8 px-8 sm:px-16">
              <span className="text-primary font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-widest block">Testar. Rodar. Aprender. Compartilhar.</span>
            </div>
          </div>
        </section>

        <section id="conteudos" className="py-20 md:py-32 container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black uppercase mb-6 tracking-tight text-balance leading-none">O que vai rolar</h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">Da primeira volta aos testes mais completos. Acompanhe a evolução junto com a gente.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Rolês por Piracicaba", d: "A cidade vira pista de teste. Rotas, situações reais e a experiência de circular sobre uma roda.", icon: MapPin },
              { t: "Testes na Prática", d: "Mais do que repetir especificações: colocar equipamentos em uso e mostrar como eles se comportam.", icon: Settings2 },
              { t: "Reviews e Impressões", d: "O que chama atenção, o que surpreende e o que você precisa saber antes de considerar um equipamento.", icon: Search },
              { t: "Comparativos", d: "Monociclo, patinete ou moto elétrica? Compare propostas para entender qual combina com cada uso.", icon: Layers },
              { t: "Dicas para Iniciantes", d: "Aprendizado, equipamentos, segurança e as dúvidas de quem está pensando em entrar nesse universo.", icon: HelpCircle },
              { t: "Novidades Elétricas", d: "Novos equipamentos, acessórios, tecnologias e tendências da mobilidade elétrica.", icon: Zap }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <FeatureCard 
                  feature={{
                    title: item.t,
                    description: item.d,
                    icon: item.icon
                  }}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-16 md:mt-20 text-center px-4">
            <ShinyButton
              onClick={() => window.open("https://www.instagram.com/piranomono/", "_blank")}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg"
            >
              VER OS CONTEÚDOS NO INSTAGRAM
            </ShinyButton>
          </div>
        </section>

        <section className="bg-primary py-20 md:py-32 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black uppercase mb-16 md:mb-20 text-center tracking-tight leading-none">Da curiosidade para a rua</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { s: "01", t: "Descobrir", d: "Conhecer novos equipamentos e entender a proposta de cada um." },
                { s: "02", t: "Experimentar", d: "Colocar na rua e sentir como a tecnologia funciona fora da ficha técnica." },
                { s: "03", t: "Testar", d: "Observar comportamento, uso, pontos fortes e limitações." },
                { s: "04", t: "Compartilhar", d: "Transformar a experiência em conteúdo para quem também quer conhecer." }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <span className="text-8xl font-heading font-black opacity-20 block mb-6 transition-transform group-hover:scale-110 duration-500">{step.s}</span>
                  <h3 className="text-3xl font-heading font-bold uppercase mb-4 tracking-tight">{step.t}</h3>
                  <p className="opacity-90 leading-relaxed font-medium text-lg">{step.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black uppercase mb-16 md:mb-20 text-center max-w-4xl mx-auto tracking-tight leading-[1] md:leading-none text-balance">
            Se mobilidade elétrica te deixa curioso, chegou ao lugar certo.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { t: "Quero começar", d: "Para quem olha um monociclo e pensa: “Será que eu conseguiria andar nisso?”" },
              { t: "Estou pesquisando", d: "Para quem está considerando comprar um monociclo, patinete ou moto elétrica." },
              { t: "Curto tecnologia", d: "Para quem acompanha autonomia, desempenho e novas formas de mobilidade." },
              { t: "Sou uma Marca", d: "Para empresas que querem colocar seus produtos em movimento e gerar conteúdo real.", cta: "FALAR SOBRE PARCERIA", link: "#parcerias" }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-card border border-white/5 p-10 rounded-3xl flex flex-col justify-between hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-heading font-bold uppercase mb-4 tracking-tight leading-none">{p.t}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed font-medium">{p.d}</p>
                </div>
                {p.cta && (
                  <a href={p.link} className="text-primary font-bold hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    {p.cta} <span className="text-xl">→</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="sobre" className="bg-secondary/20 py-20 md:py-32 border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center relative order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] md:blur-[100px] opacity-30 animate-pulse" />
              <img src={logoImg} alt="Mascote Piranomono" className="max-w-[200px] sm:max-w-[300px] md:max-w-md animate-float relative z-10 drop-shadow-[0_20px_50px_rgba(247,147,30,0.3)]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 text-center md:text-left"
            >
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black uppercase mb-8 md:mb-10 tracking-tight leading-none">Começando uma história.</h2>
              <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed font-medium">
                <p>A Piranomono nasceu em Piracicaba, SP, da vontade de explorar uma maneira diferente de se mover pela cidade.</p>
                <p>O projeto está no começo — e essa é justamente a parte interessante. Você pode acompanhar desde os primeiros rolês e aprendizados até os reviews e experiências que virão.</p>
                <p>Aqui não tem personagem de especialista. Tem curiosidade, experiência prática e vontade de mostrar o que acontece quando a mobilidade sai da ficha técnica e encontra a rua.</p>
              </div>
              <p className="text-primary font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight italic leading-tight">Piracicaba no nome.<br/>Mobilidade elétrica na rua.<br/>Liberdade sobre uma roda.</p>
            </motion.div>
          </div>
        </section>

        <section id="parcerias" className="py-20 md:py-32 bg-background overflow-hidden relative border-b border-white/5">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 md:mb-24 px-4">
                <span className="text-primary font-black tracking-[0.45em] uppercase mb-6 block text-xs sm:text-sm">Parcerias</span>
                <h2 className="text-4xl sm:text-6xl md:text-9xl font-heading font-black uppercase mb-8 tracking-tight leading-[1] md:leading-none">Sua marca em movimento.</h2>
                <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">Fabricantes, importadores e lojas podem participar dessa jornada desde o começo com conteúdo autêntico e demonstração prática.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                  {[
                    "Reviews de produtos", "Testes de equipamentos", "Demonstrações em vídeo", 
                    "Conteúdo patrocinado", "Divulgação de marcas", "Cobertura de eventos"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-secondary/40 p-6 rounded-2xl border border-white/5 group"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(247,147,30,0.5)] group-hover:scale-150 transition-transform duration-300" />
                      <span className="font-black uppercase tracking-tight text-sm md:text-base leading-none">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden lg:mt-0"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Nome</label>
                        <input 
                          type="text" placeholder="Seu nome" required
                          className="bg-black border border-white/5 p-5 rounded-2xl w-full focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Empresa</label>
                        <input 
                          type="text" placeholder="Sua marca" required
                          className="bg-black border border-white/5 p-5 rounded-2xl w-full focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                          onChange={e => setFormData({...formData, brand: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">WhatsApp</label>
                        <input 
                          type="tel" placeholder="(19) 99999-9999" required
                          className="bg-black border border-white/5 p-5 rounded-2xl w-full focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                          onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">E-mail</label>
                        <input 
                          type="email" placeholder="contato@empresa.com" required
                          className="bg-black border border-white/5 p-5 rounded-2xl w-full focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Tipo de Parceria</label>
                      <select 
                        className="bg-black border border-white/5 p-5 rounded-2xl w-full focus:border-primary outline-none transition-all font-medium appearance-none cursor-pointer [&>option]:bg-black [&>option]:text-foreground hover:[&>option]:bg-primary"
                        onChange={e => setFormData({...formData, type: e.target.value})}
                      >
                        <option>Produto para teste</option>
                        <option>Conteúdo patrocinado</option>
                        <option>Divulgação</option>
                        <option>Evento</option>
                        <option>Afiliados</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Mensagem</label>
                      <textarea 
                        placeholder="Como podemos trabalhar juntos?" required rows={4}
                        className="bg-black border border-white/5 p-5 rounded-2xl w-full focus:border-primary outline-none resize-none transition-all placeholder:text-muted-foreground/30 font-medium"
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-primary text-primary-foreground w-full py-6 rounded-2xl font-black text-xl hover:bg-primary/90 transition-all uppercase tracking-tight shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                      ENVIAR PROPOSTA
                    </button>
                    <p className="text-center text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-50">Propostas comerciais • Piracicaba/SP</p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="py-20 md:py-32 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black uppercase mb-16 md:mb-20 text-center tracking-tight leading-none">Dúvidas Frequentes</h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                { q: "A Piranomono vende monociclos ou outros veículos?", a: "Não neste momento. A Piranomono é um projeto de conteúdo sobre mobilidade elétrica, experiências, testes e demonstrações." },
                { q: "O conteúdo é só sobre monociclos?", a: "O monociclo é o protagonista inicial, mas também vamos explorar patinetes, motos elétricas, acessórios e outras tecnologias." },
                { q: "Onde acontecem os rolês?", a: "O projeto começa em Piracicaba, SP. Novos lugares e experiências poderão entrar no conteúdo conforme a Piranomono crescer." },
                { q: "Estou começando. O conteúdo também é para mim?", a: "Sim. Uma das propostas é compartilhar a própria evolução do projeto e ajudar quem está descobrindo esse universo." },
                { q: "Empresas podem enviar equipamentos para teste?", a: "Sim. Propostas de produtos, testes, demonstrações e outras ações podem ser apresentadas diretamente pelo WhatsApp." }
              ].map((faq, i) => (
                <motion.details 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-white/5 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group transition-all duration-300 hover:border-primary/30"
                >
                  <summary className="p-6 sm:p-8 cursor-pointer font-black text-lg sm:text-xl md:text-2xl uppercase font-heading flex justify-between items-center list-none tracking-tight gap-4">
                    {faq.q}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-secondary flex items-center justify-center text-primary group-open:rotate-180 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </summary>
                  <div className="p-6 sm:p-8 pt-0 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-48 container mx-auto px-4 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[150px] -z-10" />
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-9xl font-heading font-black uppercase mb-8 md:mb-10 tracking-tight leading-[1] md:leading-none text-balance"
          >
            A próxima volta<br/>começa aqui.
          </motion.h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-medium px-4">Quer acompanhar essa jornada ou colocar sua marca nela? Escolha seu caminho.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center px-4">
            <button
              onClick={() => window.open("https://www.instagram.com/piranomono/", "_blank")}
              className="bg-primary text-primary-foreground px-8 sm:px-16 py-5 sm:py-7 rounded-full font-black text-lg sm:text-xl hover:bg-primary/90 transition-all uppercase shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              ACOMPANHAR OS ROLÊS
            </button>
            <a href="https://wa.me/5519971356350" target="_blank" className="border-2 border-primary/30 text-primary px-8 sm:px-16 py-5 sm:py-7 rounded-full font-black text-lg sm:text-xl hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center hover:scale-105 active:scale-95 w-full sm:w-auto">
              FALAR SOBRE PARCERIA
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 py-16 md:py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20 items-start mb-16 md:mb-24">
            <div className="max-w-xs text-center md:text-left mx-auto md:mx-0">
              <img src={logoAsset.url} alt="Piranomono Logo" className="h-12 md:h-16 w-auto mb-6 md:mb-8 hover:scale-105 transition-transform cursor-pointer mx-auto md:mx-0" />
              <p className="text-muted-foreground font-medium text-base md:text-lg leading-relaxed">Mobilidade elétrica na prática. Direto de Piracicaba para a rua.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-16 md:gap-32 w-full md:w-auto text-center md:text-left">
              <div>
                <h4 className="text-primary font-black uppercase mb-6 md:mb-8 tracking-widest text-[10px] md:text-xs">Links</h4>
                <ul className="space-y-4 md:space-y-6 font-black uppercase text-xs md:text-sm tracking-tight">
                  <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
                  <li><a href="#conteudos" className="hover:text-primary transition-colors">Conteúdos</a></li>
                  <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                  <li><a href="#parcerias" className="hover:text-primary transition-colors">Parcerias</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-black uppercase mb-6 md:mb-8 tracking-widest text-[10px] md:text-xs">Contato</h4>
                <ul className="space-y-4 md:space-y-6 font-black uppercase text-xs md:text-sm tracking-tight">
                  <li><a href="https://wa.me/5519971356350" className="hover:text-primary transition-colors">WhatsApp</a></li>
                  <li><a href="https://www.instagram.com/piranomono/" className="hover:text-primary transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] text-muted-foreground uppercase font-black tracking-[0.25em] md:tracking-[0.35em] text-center md:text-left">
            <p>© {new Date().getFullYear()} Piranomono. Todos os direitos reservados.</p>
            <div className="flex gap-6 md:gap-8 opacity-50">
              <span className="hover:opacity-100 cursor-pointer transition-opacity">Privacidade</span>
              <span className="hover:opacity-100 cursor-pointer transition-opacity">Termos</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative"
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/5519971356350?text=Olá! Vim pelo site da Piranomono e quero conversar."
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_50px_rgba(37,211,102,0.4)]"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.03 3.232l-.67 2.52 2.572-.693c.895.632 1.914.962 2.948.963h.002c3.179 0 5.767-2.585 5.768-5.766 0-1.533-.606-2.974-1.706-4.056-1.1-1.082-2.566-1.672-4.113-1.672zm0 10.457h-.001c-.911 0-1.802-.245-2.581-.708l-.185-.11-1.92.518.513-1.875-.12-.19c-.509-.806-.777-1.728-.776-2.664.001-2.811 2.288-5.099 5.099-5.099 1.361 0 2.641.531 3.603 1.493.962.962 1.493 2.242 1.493 3.603-.001 2.812-2.288 5.099-5.1 5.099zm2.766-3.79c-.152-.076-.897-.443-1.036-.494-.139-.051-.24-.076-.341.076-.101.152-.392.494-.481.595-.089.101-.177.114-.329.038-.152-.076-.641-.236-.888-.55-.328-.431-.548-.963-.61-1.127-.063-.165-.006-.254.073-.336.075-.078.165-.204.247-.306.082-.102.109-.178.163-.28.054-.102.027-.191-.014-.268-.041-.077-.341-.823-.468-1.127-.123-.294-.251-.253-.341-.257-.088-.004-.189-.005-.29-.005-.101 0-.265.038-.404.191-.139.153-.531.519-.531 1.266 0 .747.543 1.468.619 1.57.076.102 1.073 1.638 2.603 2.296.363.157.646.251.867.322.364.116.695.1.956.061.291-.044.897-.367 1.023-.721.126-.354.126-.658.088-.721-.038-.063-.14-.102-.292-.178z"/>
            </svg>
          </motion.a>
          {/* Notification Badge Efeito */}
          <span className="absolute right-0 top-0 flex h-4 w-4 translate-x-1/4 -translate-y-1/4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-white shadow-sm flex items-center justify-center text-[10px] font-bold text-[#25D366]">1</span>
          </span>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
