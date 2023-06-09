import s from '@/styles/Receitas.module.css'
import { Check, InstagramLogo, TelegramLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className={s.title}>
        <h1>O que você faz quando chega a hora do almoço ou jantar e você não tem nem ideia de comida saudavel para fazer?</h1>

        <p className={s.contrast} ><span style={{ color: "white", fontStyle: "italic", fontSize: "28px", fontWeight: "lighter" }}>Agora ficou fácil!</span> Ebookplus Receitas de Salada</p>
        <p>110 receitas de saladas incriveis e super saudaveis</p>
        <p>Com ingredientes e passo-a-passo do modo de fazer para quem não sabe nada de cozinha!</p>
      </header>

      <main className={s.main}>
        <div className={s.image}>
          <img
            src="/ebook.jpeg"
            width="200"
            height="200"
          />
        </div>

        <ul>
          <li>
            <Check size={40} color="green" weight="bold" />
            <p>Transforme
              suas refeições
              com
              110 receitas de salada</p>
          </li>
          <li>
            <Check size={40} color="green" weight="bold" />
            <p>Receitas saudaveis e
              equilibradas</p>
          </li>
          <li>
            <Check size={40} color="green" weight="bold" />
            <p>Saladas passo a passo para
              fazer em casa. Agora ficou
              fácil!</p>
          </li>
          <li>
            <Check size={40} color="green" weight="bold" />
            <p>Economize preparando
              saladas em casa</p>
          </li>
          <li>
            <Check size={40} color="green" weight="bold" />
            <p>Adicione
              mais sabor e saúde
              às
              suas refeições</p>
          </li>
        </ul>
      </main>
      <div style={{ marginTop: "1.5rem" }} className={s.button}>
        <Link href="https://pay.kiwify.com.br/7KvHFNt" target='_blank'>
          <button className={s.btnBuy}>
            Eu quero!
          </button>
        </Link>
      </div>

      <article className={s.more}>
        <h1>E  MAIS...</h1>
        <div className={s.wrapperCard}>
          <div className={s.wrapperImage}>
            <Image src="/molhos2.png" className={s.img} width={380} height={380} alt='uma cumbuca com salada e seus ingredientes no fundo' />
          </div>

          <div className={s.wrapperText}>
            <p>Para completar os sabores de suas refeições estamos lançando um <span style={{ color: "#FFEC05" }}>BÔNUS</span> de 10 receitas de molhos incríveis e super gostosos para suas saladas</p>
            <p>O <span style={{ color: "#FFEC05" }}>BÔNUS</span> vem junto com seu <span style={{ color: "#FFEC05" }}>Ebookplus Receitas de Salada </span></p>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }} className={s.button}>
        <Link href="https://pay.kiwify.com.br/7KvHFNt" target='_blank'>
          <button className={s.btnBuy}>
            Agora eu quero!
          </button>
        </Link>
      </div>
      </article>

      <article className={s.wrap}>
        <h1>O QUE VOCÊ GANHA</h1>
        <div className={s.beneficios}>
          <section
            className={s.beneficiosCard}>
            <img
              src="/test.png"
              className="first"
              width="150"
              height="150"
            />
            <h1>Transformação de sua
              alimentação e sua vida</h1>
          </section>

          <section
            className={s.beneficiosCard}>
            <img
              src="/mulher.jpg"
              width="150"
              height="150"
            />
            <h1>Suas próprias saladas em
              casa por menor custo</h1>
          </section>

          <section
            className={s.beneficiosCard}>
            <img
              src="/rua.jpg"
              width="150"
              height="150"
            />
            <h1>A praticidade de levar
              suas
              saladas para qualquer lugar</h1>
          </section>

          <section
            className={s.beneficiosCard}>
            <img
              src="/salada.jpg"
              width="150"
              height="150"
            />
            <h1>Passo a passo com
              ingredientes na medida. Você
              mesmo faz</h1>
          </section>
        </div>
      </article>
      <div className={s.button}>
        <Link href="https://pay.kiwify.com.br/7KvHFNt" target='_blank'>
          <button className={s.btnBuy}>
            Eu quero!
          </button>
        </Link>
      </div>
      <h1 className={s.test}>TESTADO E APROVADO! VEJA O QUE ELES TÊM A DIZER</h1>

      <div className={s.depoimentoswrapper}>
        <div className={s.depoimentosCard}>
          <img src="homem.png" width="300" height="300" alt="homem de
          terno"/>
          <div className={s.textos}>
            <h1>Leandro D.</h1>
            <p>Deliciosas receitas, com opções práticas de fazer e combinações
              surpreendentemente saborosas e nutritivas que, incrementadas com
              umas
              das diversas sugestões de molhos, faz dessas saladas, o prato
              principal em qualquer ocasião.</p>
          </div>
        </div>

        <div className={s.depoimentosCard}>
          <img src="mulher-cachecol.png" width="300" height="300"
            alt="mulher de cachecol rindo" />
          <div className={s.textos}>
            <h1>Mariza S.</h1>
            <p>Esse e-book serve para mudar a alimentação, quando a gente não sabe
              por onde começar. Com esse e-book pode-se ter uma alimentaçãoo super
              natural... E os molhos do bônus são tudo de bom. É o que eu preciso
              para o meu dia-a-dia.</p>
          </div>
        </div>

        <div className={s.depoimentosCard}>
          <img src="mulher.png" width="300" height="300" alt="mulher
          sorrindo"/>
          <div className={s.textos}>
            <h1>Amanda E.</h1>
            <p>Eu acho que esse e-book é até mais amplo do que só receita de
              salada, pq tem aquelas opções com proteínas mais adiante no ebook,
              que é a refeição completa. Além disso, a parte dos molhos eu acho
              super importante, pq molho pra salada é o que a deixa mais gostosa
              ainda…</p>
          </div>
        </div>
      </div>

      <div className={s.button}>
        <Link href="https://pay.kiwify.com.br/7KvHFNt" target='_blank'>
          <button className={s.btnBuy}>
            Eu quero!
          </button>
        </Link>
      </div>

      <footer className={s.footer}>
        <div className={s.footerWrapper}>
          <div className={s.footerText}>
            <h1>Entre em contato:</h1>
            <a href="https://www.instagram.com/ebookplusoficial/" target="_blank">
              <InstagramLogo size={40} weight="bold" />
            </a>
            <a href="https://t.me/ebookplusoficial/" target="_blank">
              <TelegramLogo size={40} weight="bold" />
            </a>
          </div>
          {/* <img src="ebookplus.jpeg" width="100" height="100" alt="e-book plus" /> */}
        </div>
      </footer>
    </>
  )
}
