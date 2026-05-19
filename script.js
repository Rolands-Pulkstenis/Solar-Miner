let crystals = document.getElementById("crystalDisplay")
let income = document.getElementById("passiveIncome")
const astroid = document.getElementById("astroid")
const rockBreakSound = document.getElementById("rockBreakSound")
const bgMusic = document.getElementById("bgMusic")
const muteBtn = document.getElementById("muteBtn")
let upgradeCost1 = document.getElementById("cost1")
let upgradeCost2 = document.getElementById("cost2")
let upgradeCost3 = document.getElementById("cost3")
let upgradeCost4 = document.getElementById("cost4")
let upgradeCost5 = document.getElementById("cost5")
let upgradeCost6 = document.getElementById("cost6")
const upgradebtn1 = document.getElementById("upgradeBtn1")
const upgradebtn2 = document.getElementById("upgradeBtn2")
const upgradebtn3 = document.getElementById("upgradeBtn3")
const upgradebtn4 = document.getElementById("upgradeBtn4")
const upgradebtn5 = document.getElementById("upgradeBtn5")
const upgradebtn6 = document.getElementById("upgradeBtn6")
let crystalCount = 0
let passiveIncome = 0
let perClick = 100000000000
let cost1 = 50
let cost2 = 250
let cost3 = 750
let cost4 = 2000
let cost5 = 10000
let cost6 = 100000
let maxUpgrades = 25
let maxUpgrades6 = 20
let level1 = 0
let level2 = 0
let level3 = 0
let level4 = 0
let level5 = 0
let level6 = 0
let base = 0
let droneDmg = 0
let incomeMultiplier = 1
let soundTimeout = null

bgMusic.volume = 0.1

function shortenNumbers(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + "B"
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + "M"
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(2) + "K"
    }
    return num
}

function updateUpgradeDisplay(costElement, cost, level, maxLevel) {
    if (level >= maxLevel) {
        costElement.innerHTML = "MAXED"
        return
    }

    costElement.innerHTML = "Cost: " + shortenNumbers(cost) + " (" + level + "/" + maxLevel + ")"
}


astroid.addEventListener("click", () => {
    crystalCount += perClick
    crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
    
    clearTimeout(soundTimeout)
    rockBreakSound.currentTime = 0
    rockBreakSound.volume = 0.02
    rockBreakSound.play()
    soundTimeout = setTimeout(() => {
        rockBreakSound.pause()
    }, 1000)
})


upgradebtn1.addEventListener("click", () => {
    if (level1 < maxUpgrades && crystalCount >= cost1) {
        crystalCount -= cost1
        perClick += 1
        cost1 *= 2
        level1 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost1, cost1, level1, maxUpgrades)
    }
})

upgradebtn2.addEventListener("click", () => {
    if (level2 < maxUpgrades && crystalCount >= cost2) {
        crystalCount -= cost2
        passiveIncome += 1 * incomeMultiplier
        cost2 *= 2
        level2 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost2, cost2, level2, maxUpgrades)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})

upgradebtn3.addEventListener("click", () => {
    if (level3 < maxUpgrades && crystalCount >= cost3) {
        crystalCount -= cost3
        base += 5
        perClick *= base
        cost3 *= 2
        level3 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost3, cost3, level3, maxUpgrades)
    }
})

upgradebtn4.addEventListener("click", () => {
    if (level4 < maxUpgrades && crystalCount >= cost4) {
        crystalCount -= cost4
        droneDmg += 25
        passiveIncome += 25 * incomeMultiplier
        cost4 *= 2
        level4 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost4, cost4, level4, maxUpgrades)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})

upgradebtn5.addEventListener("click", () => {
    if (level5 < maxUpgrades && crystalCount >= cost5) {
        crystalCount -= cost5
        incomeMultiplier *= 2
        perClick *= 2
        passiveIncome *= 2
        cost5 *= 2
        level5 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost5, cost5, level5, maxUpgrades)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})

upgradebtn6.addEventListener("click", () => {
    if (level6 < maxUpgrades6 && crystalCount >= cost6) {
        crystalCount -= cost6
        passiveIncome *= 3
        perClick *= 1.5
        incomeMultiplier *= 1.25
        cost6 *= 2
        level6 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost6, cost6, level6, maxUpgrades6)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})


setInterval(() => {
    if (passiveIncome > 0) {
        crystalCount += passiveIncome
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
}, 1000)

muteBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play()
        muteBtn.innerHTML = "🔊 Music"
    } else {
        bgMusic.pause()
        muteBtn.innerHTML = "🔇 Muted"
    }
})
