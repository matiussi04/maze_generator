function Random(min, max) {
  return floor(random() * (max - min) + min);
}

function index(row, col) {
  if (row < 0 || col < 0 || row >= rows || col >= cols) {
    return -1;
  }

  return row * cols + col;
}

class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.visited = false;
    this.walls = {
      top: true,
      bottom: true,
      right: true,
      left: true
    };
  }
  checkNeighbors() {
    let neighbors = [];

    let top = grid[index(this.i - 1, this.j)];
    let bottom = grid[index(this.i + 1, this.j)];
    let right = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i, this.j - 1)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = Random(0, neighbors.length);

      this.removeWalls(neighbors[r]);

      return neighbors[r];
    } else {
      return undefined;
    }
  }

  removeWalls(neighbor) {
    let x = this.j - neighbor.j;
    let y = this.i - neighbor.i;

    if (x !== 0) {
      if (x < 0) {
        this.walls.right = false;
        neighbor.walls.left = false;
      } else {
        this.walls.left = false;
        neighbor.walls.right = false;
      }
    } else {
      if (y < 0) {
        this.walls.bottom = false;
        neighbor.walls.top = false;
      } else {
        this.walls.top = false;
        neighbor.walls.bottom = false;
      }
    }
  }
}