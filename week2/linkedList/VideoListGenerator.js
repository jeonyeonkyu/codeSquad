function NodeData(node) {
  this.data = node;
  this.next = null;
}

class VideoListGenerator {
  constructor() {
    this.head = null;
    this.next = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(node) {
    const nodeData = new NodeData(node);
    nodeData.next = this.head;
    this.head = nodeData;
    if (this.head === null) {
      this.tail = nodeData;
    }
    this.size++;
  }

  addLast(node) {
    const nodeData = new NodeData(node);
    if (this.head === null) {
      this.addFirst();
    } else {
      this.tail.next = nodeData;
      this.tail = nodeData;
      this.size++;
    }
  }

  insert(node, order = 0) {
    if (order >= this.size) {
      this.addLast(node);
    } else {
      const nodeData = new NodeData(node);
      let nextNode = this.head.next;
      let previousNode = this.head;
      for (let i = 0; i < order - 1; i++) {
        nextNode = nextNode.next;
        previousNode = previousNode.next;
      }
      nodeData.next = nextNode;
      previousNode.next = nodeData;
      this.size++;
    }
  }

}
const videoListGenerator = new VideoListGenerator();
videoListGenerator.addLast('aa');
console.log(videoListGenerator.tail);

videoListGenerator.addFirst('bb');

videoListGenerator.addLast('cc');

videoListGenerator.insert('dd', 1);


console.dir(videoListGenerator.head, { depth: null });