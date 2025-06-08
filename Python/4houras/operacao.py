faturamento = 1000
custo = 700
novas_vendas = 300

faturamento = faturamento + novas_vendas #somar
imposto = faturamento *0.1 #multiplicar
lucro = faturamento - custo #subtrair
lucro = faturamento - custo - imposto 
print(faturamento)
print(lucro)
margem_lucro = lucro / faturamento #dividir
print(margem_lucro)

restituicao = imposto *0.1
print(restituicao)
#restituicao = faturamento **0.1
#print(restituicao)

# Mod resto da divisao
# 10 % 3
#print(10 % 3)
tempo_em_meses = 160
tempo_em_anos = int(tempo_em_meses /12)
print(tempo_em_anos, "anos")
print(tempo_em_meses % 12, "meses")

#numero = 123.57
#print(round(numero))#aredonda o numero
#faturamento = 139_818_182#ediçao visual
