import { Card, CardContent } from "@/components/ui/card";
import { Collection } from "@/components/ui/collection.component";

export default function Home() {
  return (
    <div>
        <Collection>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
          <Collection.Item>
            <Card>
              <CardContent>item</CardContent>
            </Card>
          </Collection.Item>
        </Collection>
    </div>
  );
}
