faturamento = 1000 # numero inteiro
custo = 500

novas_vendas  = 300
faturamento = faturamento + novas_vendas

taxa_imposto = 0.1 # numero decimal -> float
mensagem = "O faturamento foi de" # string = texto
teve_lucro = False #booleano

imposto = taxa_imposto * faturamento
print("faturamento", faturamento)
print("custo", custo)
print("lucro", faturamento - custo - imposto)
print(mensagem, faturamento)