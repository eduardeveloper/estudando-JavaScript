public class Ponto {
  private double x;
  private double y;
}

  public class ponto (double x, double y) {
    this.x = x;
    this.y = y;
  }

  public double getX() {
    return x;
  }

  public double getY() {
    return y;
  }

//método para calcular a distância entre dois pontos por parâmetro
  public static double calcularDistancia(Ponto p1, Ponto p2) {
    double deltaX = p2.getX() - p1.getX();
    double deltaX = p2.getY() - p1.getY();
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);

//método para verificar se dois pontos são iguais por parâmetro
  public static boolean saoIguais(Ponto p1, Ponto p2) {
    return p1.getX() == p2.getX() && p1.getY() == p.getY();
  }

//método para calcular a distância entre dois pontos por referência
  public double calcularDistancia(Ponto outroPonto) {
    double deltaX = outroPonto.getX() - this.x;
    double deltaY = outroPonto.getY() - this.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }

//método para verifica se dois pontos são iguais por referência
  public boolean saoIguais(Ponto outroPonto) {
    return this.x == outroPonto.getX() && this.y == outroPonto.getY();
  }
