import s from'@/styles/Receitas.module.css'

export default function Home() {
  return (
    <>
      <header className={s.title}>
      <h1>DESCUBRA O SEGREDO PARA UMA
        ALIMENTAÇÃO EQUILIBRADA</h1>
      <p className="contrast">Ebookplus
        Receitas de Salada</p>
      <p>Mais de 100 receitas deliciosas
        e nutritivas</p>
    </header>

    <main className={s.main}>
      <div className={s.image}>
        <img
          src="/images/ebook.jpeg"
          width="200"
          height="260"
          />
      </div>

      <ul>
        <li>
          <i className="ph-bold ph-check"></i>
          <p>Transforme
            suas refeições
            com
            110 receitas de salada</p>
        </li>
        <li>
          <i className="ph-bold ph-check"></i>
          <p>Receitas saudaveis e
            equilibradas</p>
        </li>
        <li>
          <i className="ph-bold ph-check"></i>
          <p>Saladas passo a passo para
            fazer em casa. Agora ficou
            fácil!</p>
        </li>
        <li>
          <i className="ph-bold ph-check"></i>
          <p>Economize preparando
            saladas em casa</p>
        </li>
        <li>
          <i className="ph-bold ph-check"></i>
          <p>Adicione
            mais sabor e saúde
            às
            suas refeições</p>
        </li>
      </ul>
    </main>
    <div style={{marginTop: 0}} className={s.button}>
      <button className={s.btnBuy}>Eu quero!</button>
    </div>


    <article className={s.wrap}>
      <h1>O QUE VOCÊ GANHA</h1>
      <div className={s.beneficios}>
        <section
          className={s.beneficiosCard}>
          <img
            src="/images/test.png"
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
            src="/images/mulher.jpg"
            width="150"
            height="150"
            />
          <h1>Suas próprias saladas em
            casa por menor custo</h1>
        </section>

        <section
          className={s.beneficiosCard}>
          <img
            src="/images/rua.jpg"
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
            src="/images/salada.jpg"
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
      <button className={s.btnBuy}>Eu quero!</button>
    </div>
    <h1 className="test">TESTADO E APROVADO! VEJA O QUE ELES TÊM A DIZER</h1>

    <div className={s.depoimentoswrapper}>
      <div className={s.depoimentosCard}>
        <img src="images/homem.png" width="300" height="300" alt="homem de
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
        <img src="images/mulher-cachecol.png" width="300" height="300"
          alt="mulher de cachecol rindo"/>
        <div className={s.textos}>
          <h1>Mariza S.</h1>
          <p>Esse e-book serve para mudar a alimentação, quando a gente não sabe
            por onde começar. Com esse e-book pode-se ter uma alimentaçãoo super
            natural... E os molhos do bônus são tudo de bom. É o que eu preciso
            para o meu dia-a-dia.</p>
        </div>
      </div>

      <div className={s.depoimentosCard}>
        <img src="images/mulher.png" width="300" height="300" alt="mulher
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
      <button className={s.btnBuy}>Eu quero!</button>
    </div>

    <footer className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.footerText}>
          <h1>Entre em contato:</h1>
          <a href="https://www.instagram.com/ebookplusoficial/" target="_blank">
            <p><i className="ph-bold ph-instagram-logo"></i> Ebook plus oficial</p>
          </a>
        </div>
        <img src="images/ebookplus.jpeg" width="400" height="400" alt="e-book plus"/>
      </div>
    </footer>
    </>
  )
}
