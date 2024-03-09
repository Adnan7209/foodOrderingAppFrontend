import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailSectionForm from "./DetailSectionForm";
import { Separator } from "@/components/ui/separator";
import CuisinesSectionForm from "./CuisinesSectionForm";
import MenuSectionForm from "./MenuSectionForm";
import ImageSectionForm from "./ImageSectionForm";
import LoadingButton from "@/components/custom/LoadingButton";
import { Button } from "@/components/ui/button";
import { RestaurantType } from "@/types/RestaurantTypes";
import { useEffect } from "react";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "restuarant name is required",
  }),
  city: z.string({
    required_error: "city name is required",
  }),
  country: z.string({
    required_error: "country is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "delivery price is required",
    invalid_type_error: "must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "estimated delivery time is required",
    invalid_type_error: "must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "price is required"),
    })
  ),
  imageUrl:z.string().optional(),
  imageFile: z.instanceof(File, { message: "image is required" }).optional(),
}).refine((data)=> data.imageUrl || data.imageFile, {
  message:"Either image URL or image file is required",
  path:["imageFile"],
});

type RestaurantFormData = z.infer<typeof formSchema>;

type PropsType = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
  restaurant?: RestaurantType;
};
const ManageRestaurantForm = ({ restaurant, onSave, isLoading }: PropsType) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!restaurant) return;

    form.reset(restaurant);
  }, [form, restaurant]);

  const onSubmit = (formDataJson: RestaurantFormData) => {
    const formData = new FormData();
    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(`menuItems[${index}][price]`, menuItem.price.toString());
    });

    if(formDataJson.imageFile){
      formData.append(`imageFile`, formDataJson.imageFile);
    }
    
    onSave(formData);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailSectionForm />
        <Separator />
        <CuisinesSectionForm />
        <Separator />
        <MenuSectionForm />
        <Separator />
        <ImageSectionForm />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
