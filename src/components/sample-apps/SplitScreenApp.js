import "../../styles.css";
// import { SplitScreen } from "./components/SplitScreen";
import { SplitScreenChildren } from "../SplitScreenChildren";
import { people, products } from "../../db/list";
import { RegularList } from "../list/RegularList";
import { NumberedList } from "../list/NumberedList";
import { SmallPersonListItem } from "../people/SmallPersonListItem";
import { LargePersonListItem } from "../people/LargePersonListItem";
import { SmallProductListItem } from "../products/SmProductListItem";
import { LargeProductListItem } from "../products/LgProductListItem";
import { Modal } from "../modals/Modal";

const LeftComp = ({ name = "Left!" }) => {
  return <h1>{name}</h1>;
};
const RightComp = ({ message = "¡Right" }) => {
  return <h1>{message}</h1>;
};

export default function SplitScreenApp() {
  return (
    <div>
      <Modal>
        <h3>look! I popped up.</h3>
        <SplitScreenChildren>
          <h2>{people[0].name}</h2>
          <LargePersonListItem person={people[0]} />
        </SplitScreenChildren>
      </Modal>
      <SplitScreenChildren leftWeight={0.5} rightWeight={3}>
        <LeftComp name="Regular List Item" />
        <div style={{ padding: "6px" }}>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem}
          />
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={LargePersonListItem}
          />
          <NumberedList
            items={products}
            resourceName="product"
            itemComponent={SmallProductListItem}
          />
          <RegularList
            items={products}
            resourceName="product"
            itemComponent={LargeProductListItem}
          />
        </div>
      </SplitScreenChildren>
    </div>
  );
}
