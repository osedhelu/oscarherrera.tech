def incrementar(num):
   return num + 1
def decrementar(num):
   return num - 1
def multiplicar(num):
   return num * num

operaciones = {
   '#': incrementar,
   '@': decrementar,
   '*': multiplicar,
}

def procesar_cadena(cadena):
    num = 0
    resultado = ""
    for simbolo in cadena:
        if(simbolo == "&"):
            resultado += str(num)
        else:
            num = operaciones[simbolo](num)
        
    return resultado

# Prueba el código
key = procesar_cadena("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&")
print(f"submit {key}") 
