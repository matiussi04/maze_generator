const cellTam = 20
const width = 400
const height = 400
const rows = width / cellTam
const cols = height / cellTam
const button = document.querySelector('button')
let grid = []
let current
let stack = []
let mazeComplete = false

button.addEventListener('click', setCells)

function setup() {
  createCanvas(width, height)
  setCells()
}

function draw() {
  background(255)
  if (!mazeComplete) {
    createMaze()
  } else {
    grid[0].walls.top = false
    grid[grid.length - 1].walls.bottom = false
  }
  showMaze()
}

function setCells() {
  grid = []
  stack = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(new Sprite(i, j, cellTam))
    }

    mazeComplete = false
    current = grid[grid.length - 1]
  }
}

function createMaze() {
  current.visited = true
  let next = current.checkNeighbors()
  current.showCurrent()
  if (next) {
    stack.push(current)
    current = next
    //console.log(current);
  } else if (stack.length > 0) {
    current = stack.pop()
  } else {
    mazeComplete = true
    console.log('foi')
  }
}

function showMaze() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].show()
  }
}
