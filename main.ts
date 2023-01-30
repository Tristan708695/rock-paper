function update_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("P1 ;" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("P2 ;" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties ;" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds ;" + rounds)
}
let rounds = 0
let Ties = 0
let P2 = 0
let P1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("lets play a game of... ROCK,PAPER,SCISORS,SHOOT")
P1 = 0
P2 = 0
Ties = 0
rounds = 0
basic.pause(2000)
update_score_board()
basic.forever(function () {
	
})
