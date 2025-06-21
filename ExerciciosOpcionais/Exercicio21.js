

// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.



function pesoIdeal(alt, sexo) {
    let ideal;
    if (sexo === 'F') {
        ideal = 62.1 * alt - 44.7
    } else {
        ideal = 72.7 * alt - 58
    }
    console.log(`O peso ideal para você é: ${ideal.toFixed(2)} `)
}


pesoIdeal(1.89, 'M')
pesoIdeal(1.78, 'M')
pesoIdeal(1.56, 'F')
pesoIdeal(1.65, 'M')
pesoIdeal(1.35, 'F')
pesoIdeal(1.21, 'M')
pesoIdeal(1.55, 'F')
pesoIdeal(1.32, 'F')
pesoIdeal(1.44, 'M')
pesoIdeal(1.63, 'M')